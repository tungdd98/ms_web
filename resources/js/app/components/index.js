import BaseBackground from "./BaseBackground";
import BaseSlider from "./BaseSlider";
import BaseTab from "./tabs/BaseTab";
import BaseTabs from "./tabs/BaseTabs";

const GlobalComponents = {
    install(Vue) {
        Vue.component(BaseBackground.name, BaseBackground);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(BaseTabs.name, BaseTabs);
        Vue.component(BaseTab.name, BaseTab);
    }
};

export default GlobalComponents;
