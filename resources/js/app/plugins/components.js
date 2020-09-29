import { BaseBackground, BaseSlider, Tab, Tabs } from "@/app/components";

export default {
    install(Vue) {
        Vue.component(BaseBackground.name, BaseBackground);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
    }
};
