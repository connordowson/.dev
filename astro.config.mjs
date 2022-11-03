import { defineConfig } from "astro/config";
import { defaultFrontmatterAdvanced } from "./plugin.mjs";
import { tokenColors } from "./city-lights.json";
import remarkCodeTitles from "remark-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

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
    },
    remarkPlugins: [
      remarkCodeTitles,
      [
        defaultFrontmatterAdvanced,
        [
          {
            dirs: ["./src/pages/blog"],
            frontmatter: {
              layout: "../../layouts/Post.astro",
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
  integrations: [mdx(), preact()],
});
