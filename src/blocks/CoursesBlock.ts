import { Block } from "payload/types";


export const coursesBlock: Block = {
    slug: 'coursesBlock',
    labels: {
        singular: 'Courses Block',
        plural: 'Courses Blocks',
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
            defaultValue: 'E8F1FF',
        }
    ]
}