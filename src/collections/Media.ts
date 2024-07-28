import { CollectionConfig } from 'payload/types'
import isAdminOrView from '../utilities/isAdminOrView'

export const Media: CollectionConfig ={
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media',
    },
    access: {
        read: () => true,
        create: isAdminOrView,
        update: isAdminOrView,
        delete: isAdminOrView,
    },
    upload: true,
    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true,
        },
    ],

}