// Polyfills for IE 11
import "@/polyfills";

// Global components
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import GlobalMixins from "./globalMixins";
import SideBar from "@/components/SidebarPlugin";

// Element ui
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);

// Bootstrap vue
import BootstrapVuePlugin from "./bootstrap-vue";

// Vee validate
import { configure } from "vee-validate";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule],
        message: messages[rule]
    });
});

export default {
    install(Vue) {
        Vue.use(GlobalComponents);
        Vue.use(GlobalDirectives);
        Vue.use(SideBar);
        Vue.use(BootstrapVuePlugin);
        Vue.use(GlobalMixins);
        configure({
            classes: {
                valid: "is-valid",
                invalid: "is-invalid",
                dirty: ["is-dirty", "is-dirty"]
            }
        });
    }
};
