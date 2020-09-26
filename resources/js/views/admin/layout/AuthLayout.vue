<template>
    <div class="bg-default min-vh-100 d-flex flex-column">
        <div class="flex-grow-1 main-content">
            <zoom-center-transition :duration="200" mode="out-in">
                <router-view></router-view>
            </zoom-center-transition>
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
</template>
<script>
import { ZoomCenterTransition } from "vue2-transitions";

export default {
    components: {
        ZoomCenterTransition
    },
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>
<style lang="scss" scoped>
.main-content .zoomIn {
    animation-name: zoomIn8;
}
.main-content .zoomOut {
    animation-name: zoomOut8;
}
</style>
