import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Gallary',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Tara Graden Gallery',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule: any) => Rule.max(850),
    }),
  ],
})
