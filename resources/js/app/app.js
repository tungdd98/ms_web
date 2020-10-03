import Vue from "vue";
import App from "./views/App.vue";

// plugins
import Plugins from "./plugins";
Vue.use(Plugins);

// router
import router from "./router";

// store
import store from "./store";

// axios
import axios from "./plugins/axios";
Vue.prototype.$axios = axios;

// cookie
import cookie from "js-cookie";
Vue.prototype.$cookie = cookie;

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
