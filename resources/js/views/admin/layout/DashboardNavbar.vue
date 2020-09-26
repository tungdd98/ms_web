<template>
    <base-nav
        container-classes="container-fluid"
        class="navbar-top navbar-expand"
        :class="{ 'navbar-dark': type === 'default' }"
    >
        <span
            class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"
        >
            {{ $route.name }}
        </span>
        <b-navbar-nav class="align-items-center ml-md-auto">
            <li class="nav-item d-sm-none">
                <a class="nav-link" href="#">
                    <i class="icon icon-search"></i>
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
            >
                <div class="mb-0 form-group">
                    <div
                        class="input-group input-group-alternative input-group-merge"
                    >
                        <input
                            placeholder="Search"
                            type="text"
                            class="form-control"
                        />

                        <div class="input-group-append">
                            <span class="input-group-text"
                                ><i class="icon icon-search"></i
                            ></span>
                        </div>
                    </div>
                </div>
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
                        <base-thumbnail
                            path="users"
                            :thumbnail="userInfo.avatar"
                        ></base-thumbnail>
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
                    <div class="dropdown-divider"></div>
                    <b-dropdown-item @click="onLogout">
                        <i class="icon icon-log-out"></i>
                        <span>Logout</span>
                    </b-dropdown-item>
                </template>
            </base-dropdown>
        </b-navbar-nav>
    </base-nav>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        CollapseTransition
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
    methods: {
        ...mapActions({
            logout: "authenticate/logout"
        }),
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
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
