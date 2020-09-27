// Polyfills for IE 11
import "@/admin/polyfills";

// Global components
import GlobalComponents from "./components";
import GlobalDirectives from "./directives";
import GlobalMixins from "./mixins";
import SideBar from "@/admin/components/SidebarPlugin";

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
