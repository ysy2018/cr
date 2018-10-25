import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

let _router = [
  { path: '/', component: Main, name: 'Main', desc: '', hide: true },
  { path: '/1', component: Main, name: 'Main', desc: '制表' },
  { path: '/2', component: Main, name: 'Main', desc: '配件', 
    children: [
    { path: '/', name: 'Main', desc: '按钮' },
    { path: '/', name: 'Main', desc: '单号' },
    { path: '/', name: 'Main', desc: '页码' },
    { path: '/', name: 'Main', desc: '方框' },
    { path: '/', name: 'Main', desc: '小页面' }
    ]
  },
  { path: '/3', component: Main, name: 'Main', desc: '分列' },
  { path: '/4', component: Main, name: 'Main', desc: '抬头' },
  { path: '/5', component: Main, name: 'Main', desc: '导航条' },
  { path: '/6', component: Main, name: 'Main', desc: '表外行' },
  { path: '/7', component: Main, name: 'Main', desc: '背景图' },
  { path: '/8', component: Main, name: 'Main', desc: '组合' },
  { path: '/9', component: Main, name: 'Main', desc: '档案' }
]

const router = new Router({
  mode: 'hash',
  routes: _router
})

export default router
