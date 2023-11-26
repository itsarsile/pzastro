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

const aboutCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string()
	})
})

const productCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		price: z.string(),
		type: z.enum(["video", "graphic"]).optional(),
		estimatedTime: z.string(),
	})
})

export const collections = { 
	'works': worksCollection,
	'about': aboutCollection,
	'products': productCollection,
 };
