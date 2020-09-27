<template>
    <component :is="layout">
        <router-view :key="$route.fullPath"></router-view>
    </component>
</template>
<script>
import Default from "./layout/Default";
export default {
    components: {
        Default
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "default";
        },
        title() {
            return this.$route.meta.title
                ? `Hanoitourist - ${this.$route.meta.title}`
                : "Hanoitourist";
        }
    },
    watch: {
        title(val) {
            document.title = val;
        }
    },
    created() {
        document.title = this.title;
    }
};
</script>
