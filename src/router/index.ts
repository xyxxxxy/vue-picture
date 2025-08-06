import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import UserRegisterPage from '@/pages/user/UserRegisterPage.vue'
import UserManagePage from '@/pages/admin/UserManagePage.vue'
import ACCESS_ENUM from '@/access/accessEnum'
import AddPicturePage from '@/pages/AddPicturePage.vue'
import PictureManagePage from '@/pages/admin/PictureManagePage.vue'
import PictureDetailPage from '@/components/PictureDetailPage.vue'
import AddPictureBatchPage from '@/pages/AddPictureBatchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: HomePage,
      meta: {
        access: ACCESS_ENUM.NOT_LOGIN,
      },
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
      meta: {
        access: ACCESS_ENUM.NOT_LOGIN,
      },
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
      meta: {
        access: ACCESS_ENUM.NOT_LOGIN,
      },
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
      meta: {
        access: ACCESS_ENUM.ADMIN,
      },
    },
    {
      path: '/add_picture',
      name: '创建图片',
      component: AddPicturePage,
      meta: {
        access: ACCESS_ENUM.USER,
      },
    },
    {
      path: '/add_picture/batch',
      name: '批量创建图片',
      component: AddPictureBatchPage,
      meta: {
        access: ACCESS_ENUM.USER,
      },
    },
    {
      path: '/admin/pictureManage',
      name: '图片管理',
      component: PictureManagePage,
      meta: {
        access: ACCESS_ENUM.ADMIN,
      },
    },
    {
      path: '/picture/:id',
      name: '图片详情',
      component: PictureDetailPage,
      props: true,
      meta: {
        access: ACCESS_ENUM.NOT_LOGIN,
      },
    },
  ],
})

export default router
