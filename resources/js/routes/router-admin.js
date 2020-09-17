import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/admin/pages/NotFoundPage.vue";

const importComponent = path =>
    import(/* webpackChunkName: "pages" */ `../views/admin/pages/${path}.vue`);

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "dashboard"
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => importComponent("dashboard/Dashboard")
    },
    {
        path: "/users",
        name: "users",
        component: () => importComponent("user/List")
    },
    {
        path: "/login",
        name: "login",
        component: () => importComponent("Login"),
        meta: {
            layout: "AuthLayout"
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => importComponent("Register"),
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
