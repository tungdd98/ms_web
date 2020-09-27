import { BaseBackground, BaseSlider } from "@/app/components";

export default {
    install(Vue) {
        Vue.component(BaseBackground.name, BaseBackground);
        Vue.component(BaseSlider.name, BaseSlider);
    }
};
