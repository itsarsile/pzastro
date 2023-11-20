import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
	type: 'data',
	schema: ({ image }) => z.object({
		title: z.string(),
		videoID: z.string(),
		date: z.coerce.date(),
		image: image(),
	})
})

export const collections = { 
	'works': worksCollection
 };