import {
    ModalPlugin,
    IconsPlugin,
    NavbarPlugin,
    DropdownPlugin,
    CollapsePlugin,
    PaginationPlugin,
    PaginationNavPlugin,
    NavPlugin,
    FormPlugin,
    MediaPlugin
} from "bootstrap-vue";

export default {
    install(Vue) {
        Vue.use(ModalPlugin);
        Vue.use(IconsPlugin);
        Vue.use(NavbarPlugin);
        Vue.use(DropdownPlugin);
        Vue.use(CollapsePlugin);
        Vue.use(PaginationPlugin);
        Vue.use(PaginationNavPlugin);
        Vue.use(NavPlugin);
        Vue.use(FormPlugin);
        Vue.use(MediaPlugin);
    }
};
