import { createSignal, createEffect, onMount, Show } from "solid-js";

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

  onMount(() => {
    setSupportedTechnologies(() => {
      return {
        webShareSupported: window?.navigator?.share,
        clipboardSupported: window?.navigator?.clipboard,
        noOptions: !window?.navigator?.clipboard && !window?.navigator?.share,
      };
    });

    console.log(supportedTechnologies());
  });

  return (
    <Show when={!supportedTechnologies().noOptions}>
      <div class="wrapper">
        <div class="share-post shadow-md">
          <h3>Share this post</h3>

          <ul role="toolbar">
            {supportedTechnologies()?.webShareSupported && (
              <li>
                <button
                  class="button"
                  data-icon
                  onclick={`navigator.clipboard.writeText('${url}')`}
                >
                  {/* <Icon name="mdi:link-variant" /> */}
                  Share
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7Z"
                    ></path>
                  </svg>
                </button>
              </li>
            )}

            {supportedTechnologies()?.clipboardSupported && (
              <li>
                <button
                  class="button"
                  data-icon
                  onclick={`navigator.clipboard.writeText('${url}')`}
                >
                  {/* <Icon name="mdi:link-variant" /> */}
                  Copy URL
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42Z"
                    ></path>
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Show>
  );
};

export default ToggleTheme;
