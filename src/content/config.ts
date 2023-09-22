import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
  }),
});

const playgroundCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    technologies: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
      })
    ),
    links: z.object({
      code: z.string().optional(),
      demo: z.string().optional(),
    }),
    image: z.string().optional(),
    order: z.number(),
  }),
});

const musicCollectionCollection = defineCollection({
  type: 'data',
  schema: z.object({}),
});

export const collections = {
  blog: blogCollection,
  playground: playgroundCollection,
  projects: projectsCollection,
  music_collection: musicCollectionCollection,
};
