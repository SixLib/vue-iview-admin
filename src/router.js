import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/login'),
            meta: { title: '登录' },
            hidden: true
        },
        {
            path: '/',
            component: () => import('@/layout/layout'),
            redirect: 'dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/index'),
                    name: 'Dashboard',
                    meta: { title: '首页', icon: 'dashboard', noCache: true },
                    props: {
                        active: 'dashboard',
                        breadcrums: [
                            {
                                value: "首页",
                                level: 1,
                                router: ""
                            }
                        ]
                    }
                },
                {
                    path: 'documentation',
                    component: () => import('@/views/documentation'),
                    name: 'Documentation',
                    meta: { title: '文档', icon: 'documentation', noCache: true },
                    props: {
                        active: 'documentation',
                        breadcrums: [
                            {
                                value: "文档",
                                level: 1,
                                router: ""
                            }
                        ]
                    }
                }
            ]
        }
    ]
})