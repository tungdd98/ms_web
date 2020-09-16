<template>
    <component :is="layout" :key="$route.fullPath"></component>
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
<style lang="scss">
.el-loading-mask {
    background: hsla(0, 0%, 100%, 0.9) !important;
}
</style>
