<template>
    <div>
        <base-sidebar :class="{ active: isShowNav }" v-click-outside="closeNav">
            <template slot="links">
                <base-sidebar-item
                    :link="{
                        title: 'Dashboard',
                        to: '/dashboard',
                        icon: 'icon icon-home text-primary'
                    }"
                >
                </base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Users',
                        to: '/users',
                        icon: 'icon icon-users text-danger'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Countries',
                        to: '/countries',
                        icon: 'icon icon-key text-info'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Locations',
                        to: '/locations',
                        icon: 'icon icon-paperclip text-primary'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Times Tour',
                        to: '/time_tour',
                        icon: 'icon icon-clock text-success'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Vehicle Tour',
                        to: '/vehicle_tour',
                        icon: 'icon icon-star text-danger'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Customer Type',
                        to: '/customer_type',
                        icon: 'icon icon-tool text-success'
                    }"
                ></base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'Tours',
                        icon: 'icon icon-image text-success'
                    }"
                >
                    <template>
                        <base-sidebar-item
                            link-class="pl-5"
                            :link="{
                                title: 'List tour',
                                to: '/tours',
                                icon: 'icon icon-share-2 text-success'
                            }"
                        >
                        </base-sidebar-item>
                        <base-sidebar-item
                            link-class="pl-5"
                            :link="{
                                title: 'Departure Day',
                                to: '/departure_day',
                                icon: 'icon icon-instagram text-danger'
                            }"
                        >
                        </base-sidebar-item>
                        <base-sidebar-item
                            link-class="pl-5"
                            :link="{
                                title: 'Price Tour',
                                to: '/price_tour',
                                icon: 'icon icon-heart text-primary'
                            }"
                        ></base-sidebar-item>
                    </template>
                </base-sidebar-item>
                <base-sidebar-item
                    :link="{
                        title: 'User Profile',
                        to: '/user_profile',
                        icon: 'icon icon-user-check text-warning'
                    }"
                ></base-sidebar-item>
            </template>
        </base-sidebar>
        <div class="ms-content d-flex flex-column min-vh-100">
            <div class="position-relative pb-8 bg-gradient-success">
                <div class="container-fluid">
                    <div
                        class="flex-center justify-content-between justify-content-lg-end py-3"
                    >
                        <div
                            class="cursor-pointer d-lg-none d-block"
                            @click.stop="isShowNav = true"
                        >
                            <i class="icon icon-menu text-white font-22"></i>
                        </div>
                        <base-dropdown menu-on-right>
                            <template v-slot:title-container @click.prevent>
                                <div
                                    class="media align-items-center"
                                    v-if="userInfo"
                                >
                                    <base-thumbnail
                                        path="users"
                                        :thumbnail="userInfo.avatar"
                                    ></base-thumbnail>
                                    <div class="media-body">
                                        <span
                                            class="text-white font-weight-bold"
                                            >{{ userInfo.name }}</span
                                        >
                                    </div>
                                </div>
                            </template>
                            <template>
                                <li class="dropdown-item">
                                    <h5 class="text-overflow m-0">
                                        Welcome!
                                    </h5>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li class="dropdown-item" @click="onLogout">
                                    <i class="icon icon-log-out"></i>
                                    <span>Logout</span>
                                </li>
                            </template>
                        </base-dropdown>
                    </div>
                </div>
            </div>
            <div class="flex-grow-1">
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
        <div :class="['ms-backdrop', { active: isShowNav }]"></div>
    </div>
</template>
<script>
import BaseSidebar from "@/admin/components/sidebar/BaseSidebar";
import BaseSidebarItem from "@/admin/components/sidebar/BaseSidebarItem";
import BaseDropdown from "@/admin/components/BaseDropdown";
import { FadeTransition } from "vue2-transitions";
import { mapState, mapActions } from "vuex";

export default {
    components: {
        FadeTransition,
        BaseSidebar,
        BaseSidebarItem,
        BaseDropdown
    },
    computed: {
        ...mapState({
            userInfo: state => state.authenticate.userInfo
        })
    },
    data() {
        return {
            year: new Date().getFullYear(),
            isShowNav: false
        };
    },
    watch: {
        $route(to, from, next) {
            this.closeNav();
        }
    },
    methods: {
        ...mapActions({
            logout: "authenticate/logout"
        }),
        closeNav() {
            this.isShowNav = false;
        },
        async onLogout() {
            const response = await this.logout();

            if (response.success) {
                this.$cookie.remove("ms_web");
                this.$cookie.remove("user_ms_web");
                this.$router.push("/login");
            }
        }
    }
};
</script>
