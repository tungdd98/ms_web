<template>
    <base-nav
        container-classes="container-fluid"
        class="navbar-top navbar-expand"
        :class="{ 'navbar-dark': type === 'default' }"
    >
        <span
            aria-current="page"
            class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"
        >
            {{ $route.name }}
        </span>
        <!-- Navbar links -->
        <b-navbar-nav class="align-items-center ml-md-auto">
            <!-- This item dont have <b-nav-item> because item have data-action/data-target on tag <a>, wich we cant add -->
            <li class="nav-item d-sm-none">
                <a
                    class="nav-link"
                    href="#"
                    data-action="search-show"
                    data-target="#navbar-search-main"
                >
                    <i class="ni ni-zoom-split-in"></i>
                </a>
            </li>
        </b-navbar-nav>
        <b-navbar-nav class="align-items-center ml-auto ml-md-0">
            <b-form
                class="navbar-search form-inline mr-sm-3"
                :class="{
                    'navbar-search-dark': type === 'default',
                    'navbar-search-light': type === 'light'
                }"
                id="navbar-search-main"
            >
                <b-form-group class="mb-0">
                    <b-input-group
                        class="input-group-alternative input-group-merge"
                    >
                        <b-form-input placeholder="Search" type="text">
                        </b-form-input>

                        <div class="input-group-append">
                            <span class="input-group-text"
                                ><i class="fas fa-search"></i
                            ></span>
                        </div>
                    </b-input-group>
                </b-form-group>
            </b-form>
            <base-dropdown
                menu-on-right
                class="nav-item"
                tag="li"
                title-tag="a"
                title-classes="nav-link pr-0"
            >
                <a
                    href="#"
                    class="nav-link pr-0"
                    @click.prevent
                    slot="title-container"
                >
                    <b-media no-body class="align-items-center" v-if="userInfo">
                        <span class="avatar avatar-sm rounded-circle">
                            <img
                                alt="Image placeholder"
                                :src="userInfo.avatar"
                            />
                        </span>
                        <b-media-body class="ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">{{
                                userInfo.name
                            }}</span>
                        </b-media-body>
                    </b-media>
                </a>

                <template>
                    <b-dropdown-header class="noti-title">
                        <h6 class="text-overflow m-0">Welcome!</h6>
                    </b-dropdown-header>
                    <b-dropdown-item href="#!">
                        <i class="icon-connect"></i>
                        <span>My profile</span>
                    </b-dropdown-item>
                    <div class="dropdown-divider"></div>
                    <b-dropdown-item @click="onLogout">
                        <i class="icon-padlock"></i>
                        <span>Logout</span>
                    </b-dropdown-item>
                </template>
            </base-dropdown>
        </b-navbar-nav>
    </base-nav>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import { BaseNav, Modal } from "@/components";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        CollapseTransition,
        BaseNav,
        Modal
    },
    props: {
        type: {
            type: String,
            default: "default"
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.authenticate.userInfo
        }),
        routeName() {
            const { name } = this.$route;
            return this.capitalizeFirstLetter(name);
        }
    },
    data() {
        return {
            activeNotifications: false,
            showMenu: false,
            searchModalVisible: false,
            searchQuery: ""
        };
    },
    methods: {
        ...mapActions({
            logout: "authenticate/logout"
        }),
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
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
