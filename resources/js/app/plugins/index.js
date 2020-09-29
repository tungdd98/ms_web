import "./vue-lazyload";
import VeeValidate from "./vee-validate";
import GlobalComponents from "./components";

export default {
    install(Vue) {
        Vue.use(VeeValidate);
        Vue.use(GlobalComponents);
    }
};
