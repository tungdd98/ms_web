import clickOutside from "@/admin/directives/click-ouside.js";

const GlobalDirectives = {
    install(Vue) {
        Vue.directive("click-outside", clickOutside);
    }
};

export default GlobalDirectives;
