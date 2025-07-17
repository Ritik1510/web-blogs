// schemas/post.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: 'Local Entrepreneurship', value: 'local-entrepreneurship' },
          { title: 'Tech', value: 'tech' },
          { title: 'Lifestyle', value: 'lifestyle' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      description: 'Short intro or lead paragraphs',
      type: 'array',
      of: [ defineArrayMember({ type: 'string' }) ],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [ defineField({
        name: 'alt',
        title: 'Alt text',
        type: 'string',
        validation: (Rule) => Rule.required().error('Alt text is required'),
      }) ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'postSection',
          title: 'Post Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'sectionImage',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
              fields: [ defineField({
                name: 'alt',
                title: 'Alt text',
                type: 'string',
                description: 'Optional alt text for section images',
              }) ],
            }),
            defineField({
              name: 'body',
              title: 'Body Text',
              type: 'array',
              of: [ defineArrayMember({ type: 'block' }) ],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: { title: 'heading', media: 'sectionImage' },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
