import { coursesBlock } from '../blocks/CoursesBlock'
import { featuresBlock } from '../blocks/FeaturesBlock'
import { Hero } from '../blocks/Hero'
import formatSlug from '../utilities/formatSlug'
import { CollectionConfig } from 'payload/types'
import isAdminOrView from '../utilities/isAdminOrView'

export const Pages: CollectionConfig ={
    slug: 'pages',
    access: {
        read: () => true,
        create: isAdminOrView,
        update: isAdminOrView,
        delete: isAdminOrView,
    },
    admin: {
        useAsTitle: 'pageName',
    },
    fields: [
        {
            name: 'pageName',
            label: 'Page Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            unique: true,
            hooks: {
                beforeValidate: [
                    formatSlug('pageName'),
                ],
            },
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks:[
                Hero,
                featuresBlock,
                coursesBlock,
            ]

        },
    ],
    versions: {
        drafts: true,
    },
}