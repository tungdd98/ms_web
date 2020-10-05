<template>
    <div class="d-flex flex-column">
        <the-header @change="isShowNav = true"></the-header>
        <!-- Begin: Nav -->
        <base-navs v-model="isShowNav" v-click-outside="closeNav">
            <template slot="links">
                <base-nav
                    :link="{
                        title: 'Trang chủ',
                        to: '/'
                    }"
                >
                </base-nav>
                <base-nav
                    :link="{
                        title: 'Du lịch trong nước'
                    }"
                >
                    <template>
                        <div
                            class="d-flex justify-content-between w-100 flex-column flex-lg-row"
                        >
                            <div
                                v-for="(nav, index) in navsNation"
                                :key="index"
                                :class="['flex-grow-1']"
                            >
                                <div
                                    class="text-uppercase text-warning font-weight-bold mb-1"
                                >
                                    {{ nav.title }}
                                </div>
                                <div
                                    v-for="(sub, idx) in nav.locations"
                                    :key="idx"
                                >
                                    <base-nav
                                        :link="{
                                            title: `${sub.title}`,
                                            to: '/category'
                                        }"
                                    >
                                    </base-nav>
                                </div>
                            </div>
                        </div>
                    </template>
                </base-nav>
            </template>
        </base-navs>
        <!-- Begin: Backdrop -->
        <div :class="['ms-backdrop', { active: isShowNav }]"></div>
        <!-- Begin: Main -->
        <main class="flex-grow-1">
            <router-view></router-view>
        </main>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from "../templates/TheHeader";
import TheFooter from "../templates/TheFooter";
import BaseNavs from "@/app/components/navs/BaseNavs";
import BaseNav from "@/app/components/navs/BaseNav";
import { mapActions } from "vuex";
export default {
    components: {
        TheHeader,
        TheFooter,
        BaseNavs,
        BaseNav
    },
    data() {
        return {
            isShowNav: false,
            navs: null
        };
    },
    computed: {
        navsNation() {
            return this.navs
                ? this.navs.filter(nav => nav.is_nation === 0)
                : [];
        },
        navsEnternation() {
            return this.navs
                ? this.navs.filter(nav => nav.is_nation !== 0)
                : [];
        }
    },
    async created() {
        await this.fetchNavs();
    },
    methods: {
        ...mapActions({
            getAllCountryNav: "location/getAllCountryNav"
        }),
        async fetchNavs() {
            const data = await this.getAllCountryNav();

            if (data) {
                this.navs = data.navs || [];
            }
        },
        closeNav() {
            this.isShowNav = false;
        }
    }
};
</script>
