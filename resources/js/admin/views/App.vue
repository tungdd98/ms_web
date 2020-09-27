<template>
    <component :is="layout">
        <router-view :key="$route.fullPath"></router-view>
    </component>
</template>

<script>
import DashboardLayout from "@/admin/views/layout/DashboardLayout";
import AuthLayout from "@/admin/views/layout/AuthLayout";
import Content from "@/admin/views/layout/Content";
export default {
    components: {
        DashboardLayout,
        AuthLayout,
        Content
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "DashboardLayout";
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
