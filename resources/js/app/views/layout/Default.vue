<template>
    <div class="d-flex flex-column">
        <the-header @change="isShowNav = true"></the-header>
        <!-- Begin: Nav -->
        <nav>
            <div class="container">
                <ul
                    :class="['ms-nav', { active: isShowNav }]"
                    v-click-outside="closeNav"
                >
                    <li class="flex-center mb-4 d-lg-none">
                        <button class="btn btn-sm btn-outline-warning px-3">
                            Đăng ký
                        </button>
                        <button class="btn btn-sm btn-warning text-white px-3">
                            Đăng nhập
                        </button>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home' }"
                            >Trang chủ</router-link
                        >
                    </li>
                    <li><a href="#">Du lịch trong nước</a></li>
                    <li><a href="#">Du lịch nước ngoài</a></li>
                    <li><a href="#">Hot tour</a></li>
                    <li><a href="#">Thư viện</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
        </nav>
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
export default {
    components: {
        TheHeader,
        TheFooter
    },
    data() {
        return {
            isShowNav: false
        };
    },
    methods: {
        toggleNav(value) {
            this.isShowNav = value;
        },
        closeNav() {
            this.isShowNav = false;
        }
    }
};
</script>
