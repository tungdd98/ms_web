import BaseInput from "@/admin/components/inputs/BaseInput.vue";
import BaseRadio from "@/admin/components/inputs/BaseRadio";
import BaseCheckbox from "@/admin/components/inputs/BaseCheckbox.vue";
import BaseUploadAvatar from "@/admin/components/inputs/BaseUploadAvatar.vue";
import BaseDropdown from "@/admin/components/BaseDropdown.vue";
import StatsCard from "@/admin/components/StatsCard.vue";
import Modal from "@/admin/components/Modal.vue";
import BaseNav from "@/admin/components/navbar/BaseNav";
import Pagination from "@/admin/components/paginations/Pagination";
import PaginationNav from "@/admin/components/paginations/PaginationNav";
import BaseThumbnail from "@/admin/components/BaseThumbnail";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VueSimpleAlert from "vue-simple-alert";
import VueNumeric from "vue-numeric";
import { Table, TableColumn, Upload, Loading } from "element-ui";

const GlobalComponents = {
    install(Vue) {
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseUploadAvatar.name, BaseUploadAvatar);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(BaseNav.name, BaseNav);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(Modal.name, Modal);
        Vue.component(Pagination.name, Pagination);
        Vue.component(PaginationNav.name, PaginationNav);
        Vue.component(BaseThumbnail.name, BaseThumbnail);
        Vue.component("validation-provider", ValidationProvider);
        Vue.component("validation-observer", ValidationObserver);
        Vue.use(Table);
        Vue.use(TableColumn);
        Vue.use(Upload);
        Vue.use(Loading.directive);
        Vue.use(VueSimpleAlert);
        Vue.use(VueNumeric);
    }
};

export default GlobalComponents;
