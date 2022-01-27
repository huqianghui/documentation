// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Adoption Framework for Terraform Landing zones',
  tagline: 'Everything-as-code. Opinionated.',
  url: 'https://aztfmod.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/landingzones.ico',
  organizationName: 'aztfmod', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aztfmod/documentation/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/aztfmod/documentation/tree/main/website/',
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
      metadata: [{name:"robots", content:"noindex"}],
      navbar: {
        title: 'Cloud Adoption Framework',
        logo: {
          alt: 'Cloud Adoption Framework for Terraform Landing zones.',
          src: 'img/logo_landingzone.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'rover/rover-intro',
            position: 'left',
            label: 'rover',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/aztfmod/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitter',
                href: 'https://gitter.im/aztfmod/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/azure/caf-terraform-landingzones',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cloud Adoption Framework for Terraform Landing zones.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
      [
        '@docusaurus/plugin-google-analytics',
        {
          trackingID: 'G-GCM5PJNDCN',
          anonymizeIP: true,
        },
      ],
    ],
};

module.exports = config;