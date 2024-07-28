import isAdminOrView from "../utilities/isAdminOrView";
import { CollectionConfig } from "payload/types";

export const Features: CollectionConfig ={
    slug: 'features',
    access: {
        read: () => true,
        create: isAdminOrView,
        update: isAdminOrView,
        delete: isAdminOrView,
    },
    admin: {
        useAsTitle: 'featureName',
    },
    fields: [
        {
            name: 'featureName',
            label: 'Feature Name',
            type: 'text',
            required: true,
            validate: (value) => {
                if(!value) {
                    return 'Please enter a Feature name';
                }
                if (value.length > 25) {
                  return 'Name cannot exceed 25 characters';
                }
                return true
              },
        },
        {
            name: 'featureDescription',
            label: 'Feature Description',
            type: 'textarea',
            required: true,
            validate: (value) => {
                if(!value) {
                    return 'Please enter a description';
                }
                if (value.length > 70) {
                  return 'Description cannot exceed 70 characters';
                }
                return true
              },
        },
        {
            name: 'featureIcon',
            label: 'Feature Icon',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

    ],
    versions: {
        drafts: true,
    },
}