const nav = [
  {
    name: 'install',
    label: '安装',
    path: '/install'
  },
  {
    name: 'intro',
    label: '介绍',
    path: '/intro'
  },
  {
    name: 'components',
    label: '组件',
    children: [
      {
        name: 'Button',
        label: '按钮',
        path: '/button'
      },
      {
        name: 'Input',
        label: '输入框',
        path: '/input'
      }
    ]
  }
]

export default nav
