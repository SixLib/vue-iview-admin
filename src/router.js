import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    mode: '',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/Login/login'),
            meta: { title: '登录' },
            hidden: true
        },
        {
            path: '/',
            component: () => import('@/layout/layout'),
            redirect: 'dashboard',
            children: [
                {
                    path: '/dashboard',
                    component: () => import('@/views/dashboard/index'),
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
                        ],
                        tag: {
                            value: "首页",
                            isOn: false,
                            router: "/"
                        }
                    }
                },
                {
                    path: 'documentation',
                    component: () => import('@/views/documentation/index'),
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
                        ],
                        tag: {
                            value: "文档",
                            isOn: false,
                            router: "/documentation"

                        }

                    }
                }
            ]
        }
    ]
})