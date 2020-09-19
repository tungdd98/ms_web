<template>
    <div>
        <b-pagination-nav
            :link-gen="linkGen"
            :number-of-pages="pageCount"
            use-router
        >
        </b-pagination-nav>
    </div>
</template>
<script>
export default {
    name: "pagination-nav",
    props: {
        pageCount: {
            type: [Number, String]
        }
    },
    methods: {
        linkGen(pageNum) {
            return pageNum === 1 ? "?" : `?page=${pageNum}`;
        }
    }
};
</script>
