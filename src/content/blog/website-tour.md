---
title: "A tour of my portfolio website"
slug: "a-tour-of-my-portfolio-website"
description: "A tour of some of the features that make up this website"
date: "2023-10-04"
tags: ["webdev"]
draft: true
---

A rundown of some of the features on this site that I think are cool that don't really deserve their own blog post. A lot of these have been inspired/stolen from other sites, so I'll link to the source if that's the case.

## Stack

The sit is built with Astro 3.0, and hosted on Netlify, and using the [CUBE CSS methodology](https://cube.fyi/). For any islands of interactivity, like the theme switcher or my top played songs from Spotify, I've used [SolidJS](https://www.solidjs.com/).

## Theme switcher

Defaults to the system preference. To prevent a flash of light theme, I've used an inline script to set the theme based on the system preference or a user preference stored in local storage. The theme can then be changed with a button and the preference is stored in local storage.

```html:Layout.astro
<script is:inline>
  const root = document.documentElement;
  const theme = localStorage.getItem("theme-preference");
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
  }
</script>
```

Styles are then applied based on the `data-theme` attribute of the `html` element, which then sets CSS custom properties to style elements based on the theme.

```css:button.css
[data-theme="dark"] .button {
  --button-color: var(--emerald-900);
}

[data-theme="light"] .button {
  --button-color: var(--emerald-50);
}
```

## Share buttons

Share buttons at the bottom of every post, using the browser [share](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) and [clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) APIs instead of linking to third party sites, allowing users to control how they share content and without any tracking involved.
Inspired by this post on the [Set Studio blog](https://set.studio/simplify-sharing-with-built-in-apis-and-progressive-enhancement/).
