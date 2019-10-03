const nav = [
  {
    name: 'install',
    label: 'install',
    path: '/install'
  },
  {
    name: 'intro',
    label: 'intro',
    path: '/intro'
  },
  {
    name: 'components',
    label: 'components',
    children: [
      {
        name: 'Button',
        label: 'button',
        path: '/button'
      },
      {
        name: 'Input',
        label: 'input',
        path: '/input'
      }
    ]
  }
]

export default nav
