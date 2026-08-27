// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'the windows guide',
  tagline: 'a calm, practical windows optimization guide',
  favicon: 'img/logo.svg',

  url: 'https://sebyaka864.github.io',
  baseUrl: '/windows-guide/',
  organizationName: 'sebyaka864',
  projectName: 'windows-guide',

  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

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
          routeBasePath: '/',
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
      title: 'the windows guide',
      logo: { alt: 'the windows guide logo', src: 'img/logo.svg' },
      items: [
        {
          href: 'https://github.com/sebyaka864/windows-guide',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `copyright © ${new Date().getFullYear()} sebyaka864. built with docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
