import { createSignal, createEffect, onMount } from "solid-js";

const storageKey = "theme-preference";

const getThemePreference = () => {
  let theme;

  if (import.meta.env.SSR) {
    return undefined;
  }

  if (typeof localStorage !== "undefined" && localStorage.getItem(storageKey)) {
    theme = localStorage.getItem(storageKey);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else {
    theme = "dark";
  }

  return theme;
};

const ToggleTheme = () => {
  const [theme, setTheme] = createSignal(null);

  onMount(() => {
    setTheme(getThemePreference());
  });

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "light") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey, "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey, "dark");
    }
  });

  return (
    <button
      aria-label={`Change to ${theme() === "dark" ? "light" : "dark"} theme`}
      class="theme-button shadow  "
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
    >
      {theme() === "dark" ? (
        <>
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM1 13v-2h4v2Zm18 0v-2h4v2Zm-8-8V1h2v4Zm0 18v-4h2v4ZM6.35 7.75L3.875 5.275l1.4-1.4L7.75 6.35Zm12.375 12.375L16.25 17.65l1.4-1.4l2.475 2.475ZM17.65 7.75l-1.4-1.4l2.475-2.475l1.4 1.4ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4Z"
            />
          </svg>
        </>
      ) : (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleTheme;
