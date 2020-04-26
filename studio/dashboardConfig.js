export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea62025a4028da6c238cb3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3inng4x4',
                  apiId: 'b054e797-4cff-43e9-a546-3b424a26acb3'
                },
                {
                  buildHookId: '5ea62025d4cde2b65f69d05b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d7ijim2v',
                  apiId: '077fecba-76b6-46e6-b9a7-f655ecef4ed4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/McZenith/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d7ijim2v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
