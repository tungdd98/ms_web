import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: "Home"
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
