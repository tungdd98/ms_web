import "@/polyfills";
import Notifications from "@/components/NotificationPlugin";
import { configure } from "vee-validate";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import GlobalMixins from "./globalMixins";
import SideBar from "@/components/SidebarPlugin";

import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

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
        Vue.use(Notifications);
        Vue.use(BootstrapVue);
        Vue.use(IconsPlugin);
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

// asset imports
import "@/assets/scss/admin.scss";
import "@/assets/vendor/icomoon/style.css";
