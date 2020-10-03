import Vue from "vue";
import Plugins from "./plugins";
import App from "./views/App.vue";

// router
import router from "./router";

// plugins
Vue.use(Plugins);

// store
import store from "./store";

// axios
import axios from "./plugins/axios";
Vue.prototype.$axios = axios;

// cookie
import cookie from "js-cookie";
Vue.prototype.$cookie = cookie;

new Vue({
    el: "#admin",
    router,
    store,
    render: h => h(App)
});
