import clickOutside from "./click-ouside.js";

const GlobalDirectives = {
    install(Vue) {
        Vue.directive("click-outside", clickOutside);
    }
};

export default GlobalDirectives;
