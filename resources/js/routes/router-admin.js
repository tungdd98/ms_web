import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import NotFound from "@/views/admin/pages/NotFoundPage.vue";
import Dashboard from "@/views/admin/pages/dashboard/Dashboard.vue";
import User from "@/views/admin/pages/user/List.vue";
import Login from "@/views/admin/pages/Login.vue";
import Register from "@/views/admin/pages/Register.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "dashboard"
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/users",
        name: "users",
        component: User
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            layout: "AuthLayout"
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
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

router.beforeEach((to, from, next) => {
    const {
        authenticate: { accessToken }
    } = store.state;

    if (to.matched.some(record => record.meta.layout !== "AuthLayout")) {
        if (!accessToken) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        if (accessToken) {
            next("/");
        } else {
            next();
        }
    }
});

export default router;
