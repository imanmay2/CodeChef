const RecruitmentSheetLinks = {
  name: 'recruitmentSheetLinks',
  title: 'Recruitment Sheet Links',
  type: 'document',
  fields: [
    {
      name: 'recruitmentYear',
      title: 'Recruitment Year',
      type: 'string',
      description: 'e.g. 2025-26',
    },
    {
      name: 'joinUsGoogleSheet',
      title: 'Join Us Google Sheet Link',
      type: 'url',
    },
    {
      name: 'joinUsSheetBest',
      title: 'Join Us Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'competitiveProgrammingGoogleSheet',
      title: 'Competitive Programming Google Sheet Link',
      type: 'url',
    },
    {
      name: 'competitiveProgrammingSheetBest',
      title: 'Competitive Programming Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'designGoogleSheet',
      title: 'Design Google Sheet Link',
      type: 'url',
    },
    {
      name: 'designSheetBest',
      title: 'Design Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'managementGoogleSheet',
      title: 'Management Google Sheet Link',
      type: 'url',
    },
    {
      name: 'managementSheetBest',
      title: 'Management Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'marketingOutreachGoogleSheet',
      title: 'Marketing & Outreach Google Sheet Link',
      type: 'url',
    },
    {
      name: 'marketingOutreachSheetBest',
      title: 'Marketing & Outreach Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'projectsGoogleSheet',
      title: 'Projects Google Sheet Link',
      type: 'url',
    },
    {
      name: 'projectsSheetBest',
      title: 'Projects Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'socialMediaContentGoogleSheet',
      title: 'Social Media & Content Google Sheet Link',
      type: 'url',
    },
    {
      name: 'socialMediaContentSheetBest',
      title: 'Social Media & Content Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'webDevelopmentGoogleSheet',
      title: 'Web Development Google Sheet Link',
      type: 'url',
    },
    {
      name: 'webDevelopmentSheetBest',
      title: 'Web Development Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'contactUsGoogleSheet',
      title: 'Contact Us Google Sheet Link',
      type: 'url',
    },
    {
      name: 'contactUsSheetBest',
      title: 'Contact Us Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'whatsAppGroupLinks',
      title: 'WhatsApp Group Links',
      type: 'object',
      fields: [
        {
          name: 'management',
          title: 'Management',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'design',
          title: 'Design',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'competitive_programming',
          title: 'Competitive Programming',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'social_media_and_content',
          title: 'Social Media and Content',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'marketing_and_outreach',
          title: 'Marketing and Outreach',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'web_development',
          title: 'Web Development',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'finance',
          title: 'Finance',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'projects',
          title: 'Projects',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      year: 'recruitmentYear',
    },
    prepare({year}) {
      return {
        title: `Recruitments ${year || 'Year not set'}`,
      }
    },
  },
}

export default RecruitmentSheetLinks
