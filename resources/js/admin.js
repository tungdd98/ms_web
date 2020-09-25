import Vue from "vue";
import DashboardPlugin from "./plugins/dashboard-plugin";
import App from "./views/admin/App.vue";

// router
import router from "./routes/router-admin";

// plugin
Vue.use(DashboardPlugin);

// store
import store from "@/store";

// axios
import axios from "@/utils/axios";
Vue.prototype.$axios = axios;

// cookie
import cookie from "js-cookie";
Vue.prototype.$cookie = cookie;

// filters
import { formatDate, formatTime } from "@/utils/filters";
Vue.filter("formatDate", formatDate);
Vue.filter("formatTime", formatTime);

new Vue({
    el: "#admin",
    router,
    store,
    render: h => h(App)
});
