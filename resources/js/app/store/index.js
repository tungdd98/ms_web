import Vue from "vue";
import Vuex from "vuex";
import axios from "@/app/plugins/axios";
import cookie from "js-cookie";
import tour from "./modules/tour";
import location from "./modules/location";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;
Vuex.Store.prototype.$cookie = cookie;

const store = new Vuex.Store({
    modules: {
        tour,
        location
    }
});

export default store;
