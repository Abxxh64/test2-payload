import { CollectionConfig } from "payload/types";
import isAdminOrView from "../utilities/isAdminOrView";

export const Instructors: CollectionConfig ={
    slug: 'instructors',
    access: {
        read: () => true,
        create: isAdminOrView,
        update: isAdminOrView,
        delete: isAdminOrView,
    },
    admin: {
        useAsTitle: 'instructorName',
    },
    fields: [
        {
            name: 'instructorName',
            label: 'Instructor Name',
            type: 'text',
            required: true,
        },
        {
            name: 'bio',
            label: 'Bio',
            type: 'textarea',
        },
        {
            name: 'profileImage',
            label: 'Profile Image',
            type: 'upload',
            relationTo: 'media',
        },

    ],
    versions: {
        drafts: true,
    },
}