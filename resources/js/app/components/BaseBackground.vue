<template>
    <div
        class="ms-bg-cover"
        :style="`background-image: url(${path}${src || noimage})`"
    >
        <slot></slot>
    </div>
</template>

<script>
import noimage from "~/noimages.png";
export default {
    name: "base-background",
    props: {
        src: { type: String, default: "" },
        path: { type: String, default: "" }
    },
    data() {
        return {
            noimage
        };
    }
};
</script>

<style lang="scss" scoped>
.ms-bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
