<template>
    <div class="ms-carousel">
        <carousel
            :perPage="1"
            :paginationEnabled="false"
            navigationEnabled
            loop
            scrollPerPage
            navigationNextLabel="<i class='icon icon-chevron-right'></i>"
            navigationPrevLabel="<i class='icon icon-chevron-left'></i>"
            :perPageCustom="perPageCustom"
        >
            <slide v-for="item in items" :key="item[keyItem]">
                <slot :item="item"></slot>
            </slide>
        </carousel>
        <slot name="content"></slot>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "base-slider",
    components: {
        Carousel,
        Slide
    },
    props: {
        items: { type: Array, default: [] },
        keyItem: { type: [String, Number] },
        perPageCustom: { type: Array }
    }
};
</script>
