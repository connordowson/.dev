declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

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
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"add-a-custom-syntax-highlighting-theme-in-astro.md": {
  id: "add-a-custom-syntax-highlighting-theme-in-astro.md",
  slug: "add-a-custom-shiki-syntax-theme-in-astro",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-top-10-favourite-albums-from-2022.md": {
  id: "my-top-10-favourite-albums-from-2022.md",
  slug: "my-top-10-favourite-albums-from-2022",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"view-draft-posts-whilst-running-gatsby-blog-in-development.md": {
  id: "view-draft-posts-whilst-running-gatsby-blog-in-development.md",
  slug: "view-draft-posts-whilst-running-gatsby-blog-in-development",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"view-styles.md": {
  id: "view-styles.md",
  slug: "view-styles",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"playground": {
"holo-pokemon-card.mdx": {
  id: "holo-pokemon-card.mdx",
  slug: "holo-pokemon-card",
  body: string,
  collection: "playground",
  data: InferEntrySchema<"playground">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}