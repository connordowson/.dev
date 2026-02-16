import { createSignal, onMount, Show } from "solid-js";

type Props = {
  title: string;
  url: URL;
};

const ToggleTheme = ({ title, url }: Props) => {
  const [supportedTechnologies, setSupportedTechnologies] = createSignal({
    webShareSupported: false,
    clipboardSupported: false,
    noOptions: false,
  });

  const [alertState, setAlertState] = createSignal({
    share: {
      state: "hidden",
      message: "",
    },
    copy: {
      state: "hidden",
      message: "",
    },
  });

  onMount(() => {
    setSupportedTechnologies(() => {
      return {
        webShareSupported: !!window?.navigator?.share,
        clipboardSupported: !!window?.navigator?.clipboard,
        noOptions: !window?.navigator?.clipboard && !window?.navigator?.share,
      };
    });
  });

  const handleShare = () => {
    window.navigator.share({
      title,
      url: url.href,
      text: title,
    });

    setAlertState(() => {
      return {
        ...alertState(),
        share: {
          state: "visible",
          message: "Thanks!",
        },
      };
    });

    setTimeout(() => {
      setAlertState(() => {
        return {
          ...alertState(),
          share: {
            state: "hidden",
            message: "",
          },
        };
      });
    }, 2000);
  };

  const handleCopy = () => {
    window.navigator.clipboard.writeText(url.toString());

    setAlertState(() => {
      return {
        ...alertState(),
        copy: {
          state: "visible",
          message: "Copied URL!",
        },
      };
    });

    setTimeout(() => {
      setAlertState(() => {
        return {
          ...alertState(),
          copy: {
            state: "hidden",
            message: "",
          },
        };
      });
    }, 2000);
  };

  return (
    <Show when={!supportedTechnologies().noOptions}>
      <div class="wrapper region">
        <hr />
        <div class="share-post">
          <h2>Share this post</h2>

          <div>
            {supportedTechnologies()?.webShareSupported && (
              <span class="relative">
                <button
                  class="button"
                  type="button"
                  data-icon
                  onclick={handleShare}
                >
                  Share
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <title>Share</title>

                    <path
                      fill="currentColor"
                      d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7Z"
                    ></path>
                  </svg>
                </button>
                <div
                  role="alert"
                  aria-live="polite"
                  class="context-alert"
                  data-state={alertState().share.state}
                >
                  {alertState().share.message}
                </div>
              </span>
            )}

            {supportedTechnologies()?.clipboardSupported && (
              <span class="relative">
                <button
                  class="button"
                  type="button"
                  data-icon
                  onclick={handleCopy}
                >
                  Copy URL
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <title>Copy</title>
                    <path
                      fill="currentColor"
                      d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42Z"
                    ></path>
                  </svg>
                </button>
                <div
                  role="alert"
                  class="context-alert"
                  data-state={alertState().copy.state}
                >
                  {alertState().copy.message}
                </div>
              </span>
            )}
          </div>
        </div>
      </div>
    </Show>
  );
};

export default ToggleTheme;
