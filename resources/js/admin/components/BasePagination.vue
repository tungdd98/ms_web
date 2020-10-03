<template>
    <nav v-if="pageCount > 1">
        <paginate
            :page-count="pageCount"
            :page-range="3"
            :click-handler="paginate"
            :value="parseInt($route.query.page || 1)"
            prev-text="<i class='icon icon-chevron-left'></i>"
            prev-class="page-item"
            prev-link-class="page-link"
            next-text="<i class='icon icon-chevron-right'></i>"
            next-class="page-item"
            next-link-class="page-link"
            container-class="pagination"
            page-class="page-item"
            page-link-class="page-link"
        >
        </paginate>
    </nav>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
    name: "base-pagination",
    components: {
        Paginate
    },
    props: {
        pageCount: {
            type: Number,
            default: 0
        }
    },
    methods: {
        paginate(page) {
            const { name, params, query } = this.$route;
            this.$router.push({
                name,
                params,
                query: {
                    ...query,
                    page: page === 1 ? undefined : page
                }
            });
        }
    }
};
</script>
