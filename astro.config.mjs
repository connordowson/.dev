import { defineConfig } from "astro/config";
import { defaultFrontmatterAdvanced } from "./plugin.mjs";
import { tokenColors } from "./city-lights.json";
import remarkCodeTitles from "remark-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: {
        name: "city-lights",
        type: "dark",
        settings: tokenColors,
      },
      wrap: true,
      skipInline: false,
      drafts: false,
    },
    remarkPlugins: [
      remarkCodeTitles,
      [
        defaultFrontmatterAdvanced,
        [
          {
            dirs: ["./src/pages/blog"],
            frontmatter: {
              layout: "@layouts/Post.astro",
            },
          },
          {
            dirs: ["./src/pages/playground/"],
            frontmatter: {
              layout: "@layouts/Playground.astro",
            },
          },
        ],
      ],
    ],
    rehypePlugins: [
      [
        rehypeAutolinkHeadings,
        [
          {
            behavior: "after",
            content: {
              type: "text",
              value: "#",
            },
          },
        ],
      ],
    ],
  },
  integrations: [
    mdx(),
    solidJs(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "server",
  adapter: netlify(),
});
