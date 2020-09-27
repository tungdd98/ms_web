import Vue from "vue";
import App from "./views/App.vue";
import "./polyfills";

// plugins
import Plugins from "./plugins";
Vue.use(Plugins);

// directives
import Derectives from "./directives";
Vue.use(Derectives);

// router
import router from "./router";

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
