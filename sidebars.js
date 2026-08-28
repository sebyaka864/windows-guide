module.exports = {
  guideSidebar: [
    { type: 'link', label: 'home', href: '/' },
    {
      type: 'category',
      label: 'get started',
      collapsible: false,
      collapsed: false,
      items: [
        { type: 'doc', id: 'intro', label: 'introduction' },
        { type: 'doc', id: 'guide/before-you-begin', label: 'before you begin' },
        { type: 'doc', id: 'guide/clean-install', label: 'setup' },
      ],
    },
    {
      type: 'category',
      label: 'build a solid setup',
      collapsible: false,
      collapsed: false,
      items: [
        'guide/drivers-and-updates',
        'guide/runtime-components',
        'guide/optimization',
      ],
    },
    {
      type: 'category',
      label: 'more resources',
      collapsible: false,
      collapsed: false,
      items: ['guide/other-guides'],
    },
  ],
};
