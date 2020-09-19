<template>
    <component :is="layout">
        <router-view :key="$route.fullPath"></router-view>
    </component>
</template>

<script>
import DashboardLayout from "@/views/admin/layout/DashboardLayout";
import AuthLayout from "@/views/admin/layout/AuthLayout";
import Content from "@/views/admin/layout/Content";
export default {
    components: {
        DashboardLayout,
        AuthLayout,
        Content
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "DashboardLayout";
        }
    }
};
</script>
