import { Block } from "payload/types";


export const Hero: Block ={
    slug: 'hero',
    labels: {
        singular: 'Hero Block',
        plural: 'Hero Blocks',
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            required: true,
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea',
            required: true,
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'backgroundColor',
            label: 'Background Color',
            type: 'text',
            defaultValue: 'E8F1FF',
        }
    ]
}