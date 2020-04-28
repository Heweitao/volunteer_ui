import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from "@/store"
import utils from '@/public/utils'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '首页',
    redirect: '/Home',
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: '首页',
    redirect: '/Home',
    //component: () => import('../views/Home.vue'),
    children: [{
        path: '/Home',
        name: 'Home',
        component: () =>
          import ('../views/Home.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () =>
          import ('@/views/test')
      },
      {
        path: '/Activity',
        name: 'Activity',
        component: () =>
          import ('../views/Activity.vue')
      }, {
        path: '/ShowStyle',
        name: 'ShowStyle',
        component: () =>
          import ('../views/ShowStyle.vue')
      }, {
        path: '/About',
        name: 'About',
        component: () =>
          import ('../views/About.vue')
      }, {
        path: '/ActivityInfo',
        name: 'ActivityInfo',
        component: () =>
          import ('@/views/ActivityInfo.vue')
      },
      /*{  
                     path: '/Data',
                     name: 'Data',
                     component: () => import('../views/Data.vue')
                 }, */
      {
        path: '/DataEcharts',
        name: 'DataEcharts',
        component: () =>
          import ('../views/DataEcharts.vue')
      }, {
        path: '/Community',
        name: 'Community',
        component: () =>
          import ('../views/Community.vue')
      }, {
        path: '/HistoryActivity',
        name: 'HistoryActivity',
        component: () =>
          import ('../views/HistoryActivity.vue')
      }, {
        path: '/User',
        name: 'User',
        redirect: '/UserMyInfo',
        children: [{
          path: '/UserMyInfo',
          name: '我的信息',
          component: () =>
            import ('../views/UserMyInfo.vue')
        }, {
          path: '/UserDataEdit',
          name: '资料修改',
          component: () =>
            import ('../views/UserDataEdit.vue')
        }, {
          path: '/UserPass',
          name: '密码修改',
          component: () =>
            import ('../views/UserPass.vue')
        }, {
          path: '/UserActivity',
          name: '我的活动',
          component: () =>
            import ('../views/UserActivity.vue')
        }, ],
        component: () =>
          import ('../views/User.vue')
      },
    ],
    component: () =>
      import ('../views/Index.vue')
  },
  {
    path: '/Admin',
    name: '管理员',
    redirect: '/AdminIndex',
    children: [{
        path: '/AdminIndex',
        name: '统计',
        component: () =>
          import ('../views/Admin/AdminIndex.vue')
      }, {
        path: '/AdminGL',
        name: '管理员',
        component: () =>
          import ('../views/Admin/system/AdminGL.vue')
      },
      {
        path: '/AdminUsers',
        name: '志愿者管理',
        component: () =>
          import ('../views/Admin/AdminUsers.vue')
      },
      {
        path: '/AdminActivity',
        name: '活动管理',
        component: () =>
          import ('../views/Admin/activity/AdminActivity.vue')
      },
      {
        path: '/AdminSystem',
        name: '系统管理',
        component: () =>
          import ('../views/Admin/AdminSystem.vue')
      },
      {
        path: '/AdminInfoManagement',
        name: '信息管理',
        component: () =>
          import ('../views/Admin/info/AdminInfoManagement.vue')
      },
      {
        path: '/AdminMyInfo',
        name: '我的信息',
        component: () =>
          import ('../views/Admin/AdminMyInfo.vue')
      },
      {
        path: '/AdminAddActivity',
        name: '发布活动',
        component: () =>
          import ('../views/Admin/activity/AdminAddActivity.vue')
      },
      {
        path: '/AdminHistoryActivity',
        name: '历史活动',
        component: () =>
          import ('../views/Admin/activity/AdminHistoryActivity.vue')
      },
      {
        path: '/VolunteerInfo',
        name: '志愿者信息',
        component: () =>
          import ('../views/Admin/volunteer/VolunteerInfo.vue')
      },
      {
        path: '/VolunteerReview',
        name: '志愿者审核',
        component: () =>
          import ('../views/Admin/volunteer/VolunteerReview.vue')
      },
      {
        path: '/VolunteerTimeEntry',
        name: '义工时录入',
        component: () =>
          import ('../views/Admin/volunteer/VolunteerTimeEntry.vue')
      },
      {
        path: '/HotActivity',
        name: '热门活动',
        component: () =>
          import ('../views/Admin/info/HotActivity.vue')
      },
      {
        path: '/VolunteerCommunity',
        name: '志愿社区',
        component: () =>
          import ('../views/Admin/info/VolunteerCommunity.vue')
      }
    ],
    component: () =>
      import ('../views/Admin/Admin.vue')
  },
  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: () =>
      import ('../views/Admin/AdminLogin.vue')
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log(store.state.token)
  if (Object.keys(store.state.token).length === 0 && to.name != 'AdminLogin' && to.name != 'Home' && to.name != 'Login') {
    next({
      name: 'Login'
    })
  } else {
    next()
  }
})


export default router
