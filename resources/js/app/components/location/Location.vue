<template>
    <div class="px-1 overflow-hidden position-relative h-100">
        <img
            v-lazy="`images/upload/locations/${item.thumbnail}`"
            class="img-fluid rounded img-fit w-100 h-100"
        />
        <div class="absolute-center text-center">
            <span
                class="text-white font-weight-bold text-uppercase text-shadow"
                >{{ item.title }}</span
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }
};
</script>
