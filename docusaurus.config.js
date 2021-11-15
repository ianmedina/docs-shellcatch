// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prácticas Shellcatch',
  tagline: 'Esta documentación describe las prácticas realizadas en la empresa Shellcatch y en el blog ' +
           'se detallan los conocimientos adquiridos.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ianmedina',
  projectName: 'shellcatch',
  

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
            blogSidebarTitle: 'Publicaciones recientes',
            blogDescription: 'Blog de prácticas en la organización Shellcatch',
            postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '\u2600',
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      navbar: {
        title: 'Prácticas Shellcatch',
        items: [
          {
            type: 'doc',
            docId: 'inicio',
            position: 'right',
            label: 'Documentación',
          },
          {
            to: '/blog',
            label: 'Blog', 
            position: 'right'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config