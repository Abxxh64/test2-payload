import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import isAdminOrView from "../utilities/isAdminOrView";

export const Courses: CollectionConfig ={
    slug: 'courses',
    access: {
        read: () => true,
        create: isAdminOrView,
        update: isAdminOrView,
        delete: isAdminOrView,
    },
    admin: {
        useAsTitle: 'courseName',
    },
    fields: [
        {
            name: 'courseName',
            label: 'Course Name',
            type: 'text',
            required: true,
            validate: (value) => {
                if(!value) {
                    return 'Please enter a course name';
                }
                if (value.length > 35) {
                  return 'Course name cannot exceed 35 characters';
                }
                return true
              },
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            unique: true,
            hooks: {
                beforeValidate: [
                    formatSlug('courseName'),
                ],
            },
        },
        {
            name: 'department',
            label: 'Department',
            type: 'text',
            required: true,
            validate: (value) => {
                if(!value) {
                    return 'Please enter a Department name';
                }
                if (value.length > 25) {
                  return 'Department name cannot exceed 25 characters';
                }
                return true
              },
        },
        {
            name: 'shortCourseDescription',
            label: 'Short Course Description',
            type: 'textarea',
            required: true,
            validate: (value) => {
                if(!value) {
                    return 'Please enter a short course description';
                }
                if (value.length > 360) {
                  return 'Description cannot exceed 360 characters';
                }
                return true
              },
        },
        {
            name: 'courseDescription',
            label: 'Course Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'courseImage',
            label: 'Course Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'coursePrice',
            label: 'Course Price',
            type: 'number',
            required: true,
        },
        {
            name: 'discountedPrice',
            label: 'Discounted Price',
            type: 'number',
            validate: (value, { data }) => {
                if (value > data.coursePrice) {
                    return "Discounted price cannot be larger than course price";
                }
            }
          
        },
        {
            name: 'courseDuration',
            label: 'Course Duration (hrs)',
            type: 'number',
            required: true,
        },
        {
            name: 'numberofLessons',
            label: 'Number of Lessons',
            type: 'number',
            required: true,
        },
        {
            name: 'sales',
            label: 'Sales',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'rating',
            label: 'Rating',
            type: 'number',
            required: true,
            validate: (value) => {
                if (value < 0 || value > 5) {
                  return 'Rating must be between 0 and 5';
                }
                return true;
              },
            defaultValue: 0, 
        },
        {
            name: 'courseContent',
            label: 'Course Content',
            type: 'array',
            fields: [
              {
                name: 'content',
                label: 'Content',
                type: 'text',
                required: true,
              },
            ],
          },
          {
            name: 'instructors',
            label: 'Instructors',
            type: 'relationship',
            relationTo: 'instructors',
            hasMany: true,
            
          },
    ],
    versions: {
        drafts: true,
    },
    
}