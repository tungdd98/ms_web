<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-item
                    :link="{
                        name: 'Dashboard',
                        path: '/dashboard',
                        icon: 'icon icon-home text-primary'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Users',
                        path: '/users',
                        icon: 'icon icon-users text-red'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Countries',
                        path: '/countries',
                        icon: 'icon icon-key text-info'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Locations',
                        path: '/locations',
                        icon: 'icon icon-paperclip text-primary'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Times Tour',
                        path: '/time_tour',
                        icon: 'icon icon-clock text-success'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Vehicle Tour',
                        path: '/vehicle_tour',
                        icon: 'icon icon-star text-danger'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Customer Type',
                        path: '/customer_type',
                        icon: 'icon icon-tool text-success'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Tour',
                        path: '/tours',
                        icon: 'icon icon-share-2 text-success'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'User Profile',
                        path: '/user_profile',
                        icon: 'icon icon-user-check text-yellow'
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
            <footer class="footer px-4">
                <div class="justify-content-center justify-content-lg-between">
                    <div class="col-12">
                        <div
                            class="copyright text-center text-lg-left text-muted"
                        >
                            © {{ year }}
                            <a
                                href="https://www.creative-tim.com"
                                class="font-weight-bold ml-1"
                                target="_blank"
                                >Made by MS</a
                            >
                        </div>
                    </div>
                </div>
            </footer>
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
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
        DashboardNavbar,
        DashboardContent,
        FadeTransition
    },
    data() {
        return {
            year: new Date().getFullYear()
        };
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
