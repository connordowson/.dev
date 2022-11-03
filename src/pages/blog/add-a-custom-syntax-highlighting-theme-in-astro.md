---
title: "How to add a custom Shiki syntax highlighting theme in Astro"
slug: "add-a-custom-shiki-syntax-theme-in-astro"
description: "Add any VS Code theme to any code blocks on your Astro site using Shiki syntax highlighter"
date: "2022-10-13"
---

Astro uses [Shiki](https://github.com/shikijs/shiki) as it's default syntax highlighter which can use any VS Code theme. Most should be available on GitHub. You'll have to find the GitHub repo to use the theme, once you've found it the `.json` file should be in the `/themes` folder.

First download the VS Code theme's json file. I'll be using the [City Lights theme](https://github.com/Yummygum/city-lights-syntax-vsc/blob/master/themes/City%20Lights-color-theme.json). Download this json file into your project, I've put mine in the root and named it `city-lights.json`.

After this, you can set your theme by updating the Shiki config in your `astro.config.mjs` file. Set the `theme.settings` attribute to the `tokenColors` from the theme you've imported.

```js:astro.config.mjs
import { defineConfig } from "astro/config"
import cityLights from "./city-lights.json";

export default defineConfig({

  markdown: {
    shikiConfig: {
      theme: {
        name: "city-lights",
        type: "dark",
        settings: cityLights.tokenColors,
      }
    }
  }

})
```
