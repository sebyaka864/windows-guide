// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Windows Guide',
  tagline: 'Your all-in-one Windows optimization guide',
  favicon: 'img/logo.svg',

  url: 'http://localhost:3000', // dev URL
  baseUrl: '/',                 // serve docs at root
  organizationName: 'sebyaka864',
  projectName: 'windows-guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',  // docs at root
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'Windows Guide',
      logo: { alt: 'Windows Guide Logo', src: 'img/logo.svg' },
      items: [
        {
          href: 'https://github.com/sebyaka864',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Sebyaka864. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;