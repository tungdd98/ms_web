import notify from "@/mixins/notify";
import confirm from "@/mixins/confirm";

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
