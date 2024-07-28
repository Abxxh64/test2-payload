import { Block } from "payload/types";


export const featuresBlock: Block = {
    slug: 'featuresBlock',
    labels: {
        singular: 'Features Block',
        plural: 'Features Blocks',
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
            name: 'backgroundColor',        
            label: 'Background Color',
            type: 'text',
            defaultValue: 'ffffff',
        },
        {
            name: 'features',
            label: 'Features',
            type: 'relationship',
            relationTo: 'features',
            hasMany: true,
            maxRows: 3,
        },
    ]
}