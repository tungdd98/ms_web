import BaseInput from "./inputs/BaseInput";
import BaseRadio from "./inputs/BaseRadio";
import BaseCheckbox from "./inputs/BaseCheckbox";
import BaseUploadAvatar from "./inputs/BaseUploadAvatar";
import BaseSelect from "./inputs/BaseSelect";
import BaseDropdown from "./BaseDropdown";
import StatsCard from "./StatsCard";
import BaseThumbnail from "./BaseThumbnail";
import BaseTable from "./BaseTable";
import BasePagination from "./BasePagination";
import BaseModal from "./BaseModal";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VueSimpleAlert from "vue-simple-alert";
import VueNumeric from "vue-numeric";
import { Upload } from "element-ui";

const GlobalComponents = {
    install(Vue) {
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseUploadAvatar.name, BaseUploadAvatar);
        Vue.component(BaseSelect.name, BaseSelect);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(BaseThumbnail.name, BaseThumbnail);
        Vue.component(BaseTable.name, BaseTable);
        Vue.component(BaseModal.name, BaseModal);
        Vue.component(BasePagination.name, BasePagination);
        Vue.component("validation-provider", ValidationProvider);
        Vue.component("validation-observer", ValidationObserver);
        Vue.use(Upload);
        Vue.use(VueSimpleAlert);
        Vue.use(VueNumeric);
    }
};

export default GlobalComponents;
