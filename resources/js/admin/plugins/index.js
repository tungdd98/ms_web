// polyfills for IE 11
import "@/utils/polyfills";

// directives
import clickOutside from "@/utils/click-ouside";

// mixins
import { confirm, notify } from "@/utils/vue-simple-alert";

// components
import GlobalComponents from "../components";

// filters
import { formatDate, formatTime, formatMoney } from "@/utils/filters";

// element ui
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);

// vee validate
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
        Vue.directive("click-outside", clickOutside);
        Vue.mixin({
            methods: {
                notify,
                confirm
            }
        });
        Vue.filter("formatDate", formatDate);
        Vue.filter("formatTime", formatTime);
        Vue.filter("formatMoney", formatMoney);
        configure({
            classes: {
                valid: "is-valid",
                invalid: "is-invalid",
                dirty: ["is-dirty", "is-dirty"]
            }
        });
    }
};
