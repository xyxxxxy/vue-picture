import { HomeOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
import accessEnum from '@/access/accessEnum'

export const routes = [
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
    meta: {
      access: accessEnum.NOT_LOGIN,
    },
  },
  {
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
    meta: {
      access: accessEnum.NOT_LOGIN,
    },
  },
  {
    key: '/add_picture',
    label: '创建图片',
    title: '创建图片',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: '/admin/pictureManage',
    label: '图片管理',
    title: '图片管理',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: 'codefather',
    icon: () => h(GithubOutlined),
    label: h('a', { href: 'https://www.codefather.cn/', target: '_blank' }, 'codefather'),
    title: 'codefather',
    meta: {
      access: accessEnum.NOT_LOGIN,
    },
  },
]
