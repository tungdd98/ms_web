import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import NotFound from "./views/pages/NotFoundPage";
import Dashboard from "./views/pages/dashboard/Dashboard";
import User from "./views/pages/user/List";
import Country from "./views/pages/country/List";
import TimeTour from "./views/pages/time_tour/List";
import VehicleTour from "./views/pages/vehicle_tour/List";
import CustomerType from "./views/pages/customer_type/List";
import Location from "./views/pages/location/List";
import Tour from "./views/pages/tour/List";
import DepartureDay from "./views/pages/departure_day/List";
import PriceTour from "./views/pages/price_tour/List";
import UserProfile from "./views/pages/user_profile/UserProfile";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "dashboard"
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            title: "Dashboard"
        }
    },
    {
        path: "/users",
        name: "users",
        component: User,
        meta: {
            title: "Users"
        }
    },
    {
        path: "/countries",
        name: "countries",
        component: Country,
        meta: {
            title: "Countries"
        }
    },
    {
        path: "/locations",
        name: "locations",
        component: Location,
        meta: {
            title: "Locations"
        }
    },
    {
        path: "/time_tour",
        name: "time_tour",
        component: TimeTour,
        meta: {
            title: "Time tour"
        }
    },
    {
        path: "/vehicle_tour",
        name: "vehicle_tour",
        component: VehicleTour,
        meta: {
            title: "Vehicle tour"
        }
    },
    {
        path: "/customer_type",
        name: "customer_type",
        component: CustomerType,
        meta: {
            title: "Customer type"
        }
    },
    {
        path: "/tours",
        name: "tours",
        component: Tour,
        meta: {
            title: "Tours"
        }
    },
    {
        path: "/departure_day",
        name: "departure_day",
        component: DepartureDay,
        meta: {
            title: "Departure day"
        }
    },
    {
        path: "/price_tour",
        name: "price_tour",
        component: PriceTour,
        meta: {
            title: "Price tour"
        }
    },
    {
        path: "/user_profile",
        name: "user_profile",
        component: UserProfile,
        meta: {
            title: "User profile"
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            layout: "AuthLayout",
            title: "Login"
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            layout: "AuthLayout",
            title: "Register"
        }
    },
    {
        path: "*",
        component: NotFound,
        meta: {
            layout: "Content",
            title: "Not found"
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
        authenticate: { accessToken, userInfo }
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
