import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";
import cookie from "js-cookie";
import user from "./modules/user";
import display from "./modules/display";
import authenticate from "./modules/authenticate";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;
Vuex.Store.prototype.$cookie = cookie;

const store = new Vuex.Store({
    modules: {
        user,
        display,
        authenticate
    }
});

const accessToken = cookie.get("ms_web");
if (accessToken) {
    store.commit("authenticate/setAccessToken", accessToken);
}

export default store;
