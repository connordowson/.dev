import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { s } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkCodeTitles from "remark-code-titles";
import { tokenColors } from "./city-lights.json";

// https://astro.build/config
export default defineConfig({
	site: "https://connordowson.dev",
	output: "static",
	image: {
		domains: ["i.discogs.com"],
	},
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
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: "append",
					properties: {
						className: ["heading-anchor"],
					},
					content: () => [
						s(
							"svg",
							{
								class: "slug-svg",
								viewBox: "0 0 16 16",
								version: "1.1",
								width: "1.5rem",
								height: "1.5rem",
							},
							[
								s("path", {
									fillRule: "evenodd",
									d: "M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",
								}),
							],
						),
					],
				},
			],
		],
	},
	integrations: [
		mdx(),
		solidJs(),
		icon({
			include: {
				mdi: ["email", "github", "linkedin"],
				"simple-icons": ["github", "linkedin", "django", "sass", "typescript"],
				"heroicons-outline": ["external-link"],
				"heroicons-solid": ["arrow-sm-left", "arrow-sm-right"],
				cib: ["postgresql"],
			},
		}),
	],
	vite: {
		plugins: [
			tailwindcss({
				applyBaseStyles: false,
			}),
		],
	},
	adapter: node({
		mode: "standalone",
	}),
});
