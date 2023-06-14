declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"my-top-10-favourite-albums-from-2022.md": {
  id: "my-top-10-favourite-albums-from-2022.md",
  slug: "my-top-10-favourite-albums-from-2022",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"use-a-vscode-syntax-highlighting-theme-in-astro.md": {
  id: "use-a-vscode-syntax-highlighting-theme-in-astro.md",
  slug: "use-a-vscode-syntax-highlighting-theme-in-astro",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"useful-webdev-links.md": {
  id: "useful-webdev-links.md",
  slug: "useful-webdev-links",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"view-draft-posts-whilst-running-gatsby-blog-in-development.md": {
  id: "view-draft-posts-whilst-running-gatsby-blog-in-development.md",
  slug: "view-draft-posts-whilst-running-gatsby-blog-in-development",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"view-styles.md": {
  id: "view-styles.md",
  slug: "view-styles",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},
"playground": {
"holo-pokemon-card.mdx": {
  id: "holo-pokemon-card.mdx",
  slug: "holo-pokemon-card",
  body: string,
  collection: "playground",
  data: InferEntrySchema<"playground">
} & { render(): Render[".mdx"] },
},
"projects": {
"calcio.md": {
  id: "calcio.md",
  slug: "calcio",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] },
"dissertation.md": {
  id: "dissertation.md",
  slug: "dissertation",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] },
"picturesquepints.md": {
  id: "picturesquepints.md",
  slug: "picturesquepints",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] },
"portfolio.md": {
  id: "portfolio.md",
  slug: "portfolio",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] },
"workout-tracker.md": {
  id: "workout-tracker.md",
  slug: "workout-tracker",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
