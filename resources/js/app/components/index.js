import BaseBackground from "./BaseBackground";
import BaseSlider from "./BaseSlider";
import Tab from "./tabs/Tab";
import Tabs from "./tabs/Tabs";

const GlobalComponents = {
    install(Vue) {
        Vue.component(BaseBackground.name, BaseBackground);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
    }
};

export default GlobalComponents;
