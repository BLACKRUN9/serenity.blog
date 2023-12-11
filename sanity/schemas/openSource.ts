import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'airdropList',
  title: 'AirdropList',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'GitHub Link',
      type: 'url',
    }),
    
    defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
  ],
})
