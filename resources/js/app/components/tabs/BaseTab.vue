<template>
    <transition name="fade" mode="out-in">
        <div v-show="isActive">
            <slot></slot>
            <slot name="footer"></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: "base-tab",
    props: {
        title: { type: String, default: "Tab" }
    },
    data() {
        return {
            isActive: true
        };
    }
};
</script>
