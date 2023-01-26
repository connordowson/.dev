import { defineConfig } from "astro/config";
import { tokenColors } from "./city-lights.json";
import remarkCodeTitles from "remark-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: {
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
    remarkPlugins: [remarkCodeTitles],
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
});
