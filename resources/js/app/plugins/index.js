// polyfills for IE 11
import "@/utils/polyfills";

// components
import GlobalComponents from "../components";

// filters
import { formatDate, formatTime, formatMoney } from "@/utils/filters";

// vue-lazyload
import VueLazyload from "vue-lazyload";
import noimage from "~/noimages.png";

// directives
import clickOutside from "@/utils/click-ouside";

export default {
    install(Vue) {
        Vue.use(GlobalComponents);
        Vue.directive("click-outside", clickOutside);
        Vue.filter("formatDate", formatDate);
        Vue.filter("formatTime", formatTime);
        Vue.filter("formatMoney", formatMoney);
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: noimage,
            loading: noimage,
            attempt: 1
        });
    }
};
