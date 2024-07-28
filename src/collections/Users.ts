import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    { 
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        {label: 'Admin', value: 'admin'},
        {label: 'Viewer', value: 'viewer'},
      ],
      required: true,
      defaultValue: 'viewer',
    },
  ],
}

export default Users
