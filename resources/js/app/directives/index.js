import clickOutside from "./click-ouside";

const Directives = {
    install(Vue) {
        Vue.directive("click-outside", clickOutside);
    }
};

export default Directives;
