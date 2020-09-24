import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";
import cookie from "js-cookie";
import user from "./modules/user";
import country from "./modules/country";
import timeTour from "./modules/time_tour";
import vehicleTour from "./modules/vehicle_tour";
import customerType from "./modules/customer_type";
import location from "./modules/location";
import display from "./modules/display";
import authenticate from "./modules/authenticate";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;
Vuex.Store.prototype.$cookie = cookie;

const store = new Vuex.Store({
    modules: {
        user,
        country,
        timeTour,
        vehicleTour,
        customerType,
        location,
        display,
        authenticate
    }
});

const accessToken = cookie.get("ms_web");
const userInfo = cookie.get("user_ms_web");

if (accessToken) {
    store.commit("authenticate/setAccessToken", accessToken);
}

if (userInfo) {
    store.commit("authenticate/setUserInfo", JSON.parse(userInfo));
}

export default store;
