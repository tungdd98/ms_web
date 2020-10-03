import Vue from "vue";
import Vuex from "vuex";
import axios from "@/app/plugins/axios";
import cookie from "js-cookie";
import tour from "./modules/tour";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;
Vuex.Store.prototype.$cookie = cookie;

const store = new Vuex.Store({
    modules: {
        tour
    }
});

export default store;
