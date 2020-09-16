import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import(
                /* webpackChunkName: "pages" */ "../views/admin/pages/dashboard/Dashboard.vue"
            )
    },
    {
        path: "/users",
        name: "users",
        component: () =>
            import(
                /* webpackChunkName: "pages" */ "../views/admin/pages/user/User.vue"
            )
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "pages" */ "../views/Login.vue"),
        meta: {
            layout: "AuthLayout"
        }
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(/* webpackChunkName: "pages" */ "../views/Register.vue"),
        meta: {
            layout: "AuthLayout"
        }
    },
    {
        path: "*",
        component: NotFound,
        meta: {
            layout: "Content"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    linkActiveClass: "active",
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});

export default router;
