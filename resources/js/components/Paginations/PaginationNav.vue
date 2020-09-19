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
        linkGen(page) {
            const { name, params, query } = this.$route;

            return {
                name,
                params,
                query: {
                    ...query,
                    page
                }
            };
        }
    }
};
</script>
