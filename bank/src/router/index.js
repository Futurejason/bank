import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/registered',
    name: 'registered',
    component: () => import('@/views/login/registered')
  },
  {
    path: '/homenews',
    name: 'homenews',
    component: () => import('@/views/home/homenews.vue')
  },
  {
    path: '/homenews/homenew',
    name: 'homenew',
    component: () => import('@/views/home/homenew.vue')
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: () => import('@/views/home/Signin.vue')
  },
  {
    path: '/home/loan',
    name: 'loan',
    component: () => import('@/views/home/loan.vue')
  },
  {
    path: '/home/payment',
    name: 'payment',
    component: () => import('@/views/home/payment.vue')
  },
  {
    path: '/home/loaninfrom',
    name: 'loaninfrom',
    component: () => import('@/views/home/loaninfrom.vue')
  },
  {
    path: '/commit',
    name: 'commit',
    component: () => import('@/views/public/commit.vue')
  },
  {
    path: '/my/loan',
    name: 'myloan',
    component: () => import('@/views/public/myloan.vue')
  },
  {
    path: '/my/information',
    name: 'information',
    component: () => import('@/views/my/information.vue')
  },
  {
    path: '/my/mymoney',
    name: 'mymoney',
    component: () => import('@/views/my/mymoney.vue')
  },
  {
    path: '/my/mysetup',
    name: 'mysetup',
    component: () => import('@/views/my/setup.vue')
  },
  {
    path: '/my/mysetup/bankcard',
    name: 'bankcard',
    component: () => import('@/views/my/bankcard.vue')
  },
  {
    path: '/my/mysetup/bankcard/bindbank',
    name: 'bindbank',
    component: () => import('@/views/my/bindbank.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import('@/views/deposit/')
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
