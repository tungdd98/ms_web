import BaseInput from "@/components/Inputs/BaseInput.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import Card from "@/components/Cards/Card.vue";
import Modal from "@/components/Modal.vue";
import StatsCard from "@/components/Cards/StatsCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import Badge from "@/components/Badge.vue";
import BaseCheckbox from "@/components/Inputs/BaseCheckbox.vue";
import BaseUploadAvatar from "@/components/Inputs/BaseUploadAvatar.vue";
import BaseRadio from "@/components/Inputs/BaseRadio";
import BaseProgress from "@/components/BaseProgress";
import BaseAlert from "@/components/BaseAlert";
import BaseNav from "@/components/Navbar/BaseNav";
import BaseHeader from "@/components/BaseHeader";
import Pagination from "@/components/Paginations/Pagination";
import PaginationNav from "@/components/Paginations/PaginationNav";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VueSimpleAlert from "vue-simple-alert";
import {
    Input,
    Tooltip,
    Popover,
    Table,
    TableColumn,
    Upload
} from "element-ui";

const GlobalComponents = {
    install(Vue) {
        Vue.component(Badge.name, Badge);
        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BaseHeader.name, BaseHeader);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(BaseNav.name, BaseNav);
        Vue.component(BaseProgress.name, BaseProgress);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseUploadAvatar.name, BaseUploadAvatar);
        Vue.component(Card.name, Card);
        Vue.component(Modal.name, Modal);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(Input.name, Input);
        Vue.component(Pagination.name, Pagination);
        Vue.component(PaginationNav.name, PaginationNav);
        Vue.component("validation-provider", ValidationProvider);
        Vue.component("validation-observer", ValidationObserver);
        Vue.use(Tooltip);
        Vue.use(Popover);
        Vue.use(Table);
        Vue.use(TableColumn);
        Vue.use(Upload);
        Vue.use(VueSimpleAlert);
    }
};

export default GlobalComponents;
