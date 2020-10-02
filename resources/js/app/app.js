import Vue from "vue";
import App from "./views/App.vue";
import "@/polyfills";

// plugins
import Plugins from "./plugins";
Vue.use(Plugins);

// directives
import Derectives from "./directives";
Vue.use(Derectives);

// router
import router from "./router";

// store
import store from "./store";

// axios
import axios from "./utils/axios";
Vue.prototype.$axios = axios;

// cookie
import cookie from "js-cookie";
Vue.prototype.$cookie = cookie;

// filters
import { formatDate, formatMoney, formatTime } from "./utils/filters";
Vue.filter("formatDate", formatDate);
Vue.filter("formatMoney", formatMoney);
Vue.filter("formatTime", formatTime);

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
