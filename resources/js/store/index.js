import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";
import user from "./modules/user";
import display from "./modules/display";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;

const store = new Vuex.Store({
    modules: {
        user,
        display
    }
});

export default store;
