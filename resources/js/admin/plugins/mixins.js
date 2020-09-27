import notify from "@/admin/mixins/notify";
import confirm from "@/admin/mixins/confirm";

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
