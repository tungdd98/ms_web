import Vue from "vue";
import VueLazyload from "vue-lazyload";
import noimage from "~/noimages.png";

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: noimage,
    loading: noimage,
    attempt: 1
});
