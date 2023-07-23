import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from 'vue-router'
import AboutView from '../views/Public/About.vue'
import {checkAuth} from "@/services/auth";

const guardCheckAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (!checkAuth()) {
        next('/login');
        return false;
    }
    next();
};

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'about',
        component: AboutView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Auth/Login.vue'),
        beforeEnter: (to, from, next) => {
            if (checkAuth()) {
                next({path: 'repository', replace: true});
            } else {
                next();
            }
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Auth/Register.vue'),
        beforeEnter(to, from, next) {
            if (checkAuth()) {
                next('/repository');
            } else {
                next();
            }
        }
    },
    {
        path: '/repository',
        name: 'repository',
        component: () => import('../views/Private/Repository.vue'),
        beforeEnter: guardCheckAuth
    },
    {
        path: '/video',
        name: 'video',
        component: () => import('../views/Private/Video.vue'),
        beforeEnter: guardCheckAuth
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Private/Contact.vue'),
        beforeEnter: guardCheckAuth
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/NotFound.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
