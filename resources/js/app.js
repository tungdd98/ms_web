import Vue from "vue";
import App from "./views/client/App.vue";

// asset imports
import "@/assets/scss/admin.scss";
import "@/assets/vendor/nucleo/css/nucleo.css";

new Vue({
    el: "#app",
    render: h => h(App)
});
