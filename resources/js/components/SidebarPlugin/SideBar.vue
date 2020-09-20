<template>
    <nav
        class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
        id="sidenav-main"
    >
        <div class="container-fluid">
            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
            </navbar-toggle-button>
            <a class="navbar-brand" href="http://localhost:8000/">
                <img
                    src="img/brand/green.png"
                    class="navbar-brand-img"
                    alt="..."
                />
            </a>

            <slot name="mobile-right">
                <ul class="nav align-items-center d-md-none">
                    <base-dropdown
                        class="nav-item"
                        menu-on-right
                        tag="li"
                        title-tag="a"
                    >
                        <a
                            slot="title-container"
                            class="nav-link"
                            href="#"
                            role="button"
                        >
                            <div
                                class="media align-items-center"
                                v-if="userInfo"
                            >
                                <span class="avatar avatar-sm rounded-circle">
                                    <img
                                        alt="Image placeholder"
                                        :src="userInfo.avatar"
                                    />
                                </span>
                            </div>
                        </a>

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
                    </base-dropdown>
                </ul>
            </slot>
            <slot></slot>
            <div
                v-show="$sidebar.showSidebar"
                class="navbar-collapse collapse show"
                id="sidenav-collapse-main"
            >
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo" />
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button
                                @click.native="closeSidebar"
                            ></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <slot name="links"> </slot>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapActions, mapState } from "vuex";
import NavbarToggleButton from "@/components/NavbarToggleButton";

export default {
    name: "sidebar",
    components: {
        NavbarToggleButton
    },
    props: {
        logo: {
            type: String,
            default: "img/brand/green.png",
            description: "Sidebar app logo"
        },
        autoClose: {
            type: Boolean,
            default: true,
            description:
                "Whether sidebar should autoclose on mobile when clicking an item"
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.authenticate.userInfo
        })
    },
    provide() {
        return {
            autoClose: this.autoClose
        };
    },
    methods: {
        ...mapActions({
            logout: "authenticate/logout"
        }),
        closeSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        showSidebar() {
            this.$sidebar.displaySidebar(true);
        },
        async onLogout() {
            const response = await this.logout();

            if (response.success) {
                this.$cookie.remove("ms_web");
                this.$cookie.remove("user_ms_web");
                this.$router.push("/login");
            }
        }
    },
    beforeDestroy() {
        if (this.$sidebar.showSidebar) {
            this.$sidebar.showSidebar = false;
        }
    }
};
</script>
