import { router } from '@/router'
import { getToken } from '@/utils/auth'
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
        }
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login')
        }
    }
})