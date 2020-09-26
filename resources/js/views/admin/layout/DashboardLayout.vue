<template>
    <div>
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
                        icon: 'icon icon-users text-danger'
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
                        name: 'Departure Day',
                        path: '/departure_day',
                        icon: 'icon icon-instagram text-danger'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'Price Tour',
                        path: '/price_tour',
                        icon: 'icon icon-heart text-primary'
                    }"
                >
                </sidebar-item>

                <sidebar-item
                    :link="{
                        name: 'User Profile',
                        path: '/user_profile',
                        icon: 'icon icon-user-check text-warning'
                    }"
                >
                </sidebar-item>
            </template>
        </side-bar>
        <div class="main-content d-flex flex-column min-vh-100">
            <div
                class="position-relative pb-6 pt-5 pt-md-8 bg-gradient-success"
            >
                <div class="container-fluid">
                    <dashboard-navbar></dashboard-navbar>
                </div>
            </div>
            <div @click="$sidebar.displaySidebar(false)" class="flex-grow-1">
                <fade-transition
                    :duration="200"
                    origin="center top"
                    mode="out-in"
                >
                    <router-view></router-view>
                </fade-transition>
            </div>
            <footer class="p-4 font-14">
                <div class="text-center text-lg-left text-muted">
                    © {{ year }}
                    <a
                        href="https://www.facebook.com/tunggdd/"
                        class="font-weight-bold ml-1"
                        target="_blank"
                        >Made by MS</a
                    >
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
        DashboardNavbar,
        FadeTransition
    },
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>
