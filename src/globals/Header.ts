import { GlobalConfig } from "payload/types";
import isAdminOrView from "../utilities/isAdminOrView";

export const Header: GlobalConfig = {
    slug: 'header',
    label: 'Header',
    access: {
        read: () => true,
        update: isAdminOrView,
    },
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
    ],
    versions: {
        drafts: true,
    },

}