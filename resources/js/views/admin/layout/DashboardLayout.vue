<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-item
                    :link="{
                        name: 'Dashboard',
                        path: '/dashboard',
                        icon: 'ni ni-tv-2 text-primary'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Users',
                        path: '/users',
                        icon: 'ni ni-bullet-list-67 text-red'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Login',
                        path: '/login',
                        icon: 'ni ni-key-25 text-info'
                    }"
                >
                </sidebar-item>
                <sidebar-item
                    :link="{
                        name: 'Register',
                        path: '/register',
                        icon: 'ni ni-circle-08 text-pink'
                    }"
                >
                </sidebar-item>
            </template>
        </side-bar>
        <div class="main-content d-flex flex-column min-vh-100">
            <base-header class="pb-6 pt-5 pt-md-8 bg-gradient-success">
                <dashboard-navbar
                    :type="$route.meta.navbarType"
                ></dashboard-navbar>
            </base-header>
            <div @click="$sidebar.displaySidebar(false)" class="flex-grow-1">
                <fade-transition
                    :duration="200"
                    origin="center top"
                    mode="out-in"
                >
                    <router-view></router-view>
                </fade-transition>
            </div>
            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
    </div>
</template>
<script>
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
    if (hasElement(className)) {
        new PerfectScrollbar(`.${className}`);
    } else {
        // try to init it later in case this component is loaded async
        setTimeout(() => {
            initScrollbar(className);
        }, 100);
    }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
        DashboardNavbar,
        ContentFooter,
        DashboardContent,
        FadeTransition
    },
    methods: {
        initScrollbar() {
            let isWindows = navigator.platform.startsWith("Win");
            if (isWindows) {
                initScrollbar("sidenav");
            }
        }
    },
    mounted() {
        this.initScrollbar();
    }
};
</script>
