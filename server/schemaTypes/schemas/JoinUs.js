export default {
  name: 'joinus',
  title: 'Join Us Settings',
  type: 'document',
  fields: [
    {
      name: 'recruiting',
      title: 'Recruiting',
      type: 'string',
      description: 'Set this to Yes to allow students to submit the Join Us form.',
      initialValue: 'Yes', //changed
      options: {
        list: [
          {title: 'Yes - open recruitments', value: 'Yes'},
          {title: 'No - close recruitments', value: 'No'}, //changed
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      recruiting: 'recruiting',
    },
    prepare({recruiting}) {
      return {
        title: 'Join Us Settings',
        subtitle: recruiting === 'Yes' ? 'Recruitments open' : 'Recruitments closed',
      }
    },
  },
}
