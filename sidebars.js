// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'doc',
      id: 'home', // document ID
      label: 'Home', // sidebar label
    },
    {
      type: 'category',
      label: 'Workspace',
      link: {
        type: 'generated-index',
        description: 'Learn about my open-source boilerplate',
        slug: '/workspace',
        keywords: ['workspace', 'nx', 'boilerplate'],
      },
      items: [
        'workspace/getting-started',
        'workspace/installation',
        {
          type: 'category',
          label: 'Techniques',
          link: {
            type: 'generated-index',
            description: 'Learn about workspace techniques',
            slug: '/workspace/techniques',
            keywords: ['workspace', 'nx', 'boilerplate'],
          },
          items: ['workspace/techniques/dependency-injection', 'workspace/techniques/health-checks', 'workspace/techniques/logging', 'workspace/techniques/nats']
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   link: {
    //     type: 'generated-index',
    //     description: 'Real world advices and tutorials',
    //     slug: '/tutorials',
    //     keywords: ['tutorials'],
    //   },
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Bitcoin Observer',
    //       link: {
    //         type: 'doc',
    //         id: 'tutorials/bitcoin-observer/introduction',
    //       },
    //       items: ['tutorials/bitcoin-observer/observer'],
    //     },
    //   ],
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;