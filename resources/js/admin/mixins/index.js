import notify from "./notify";
import confirm from "./confirm";

const GlobalMixins = {
    install(Vue) {
        Vue.mixin({
            methods: {
                notify,
                confirm
            }
        });
    }
};

export default GlobalMixins;
