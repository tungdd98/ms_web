<template>
    <div>
        <b-pagination
            first-number
            last-number
            :per-page="perPage"
            :size="size"
            :value="value"
            @change="val => $emit('change', val)"
            :align="align"
            :total-rows="total"
        >
        </b-pagination>
    </div>
</template>
<script>
export default {
    name: "pagination",
    props: {
        pageCount: {
            type: Number,
            default: 0
        },
        perPage: {
            type: Number,
            default: 10
        },
        total: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            default: 1
        },
        size: {
            type: String,
            default: ""
        },
        align: {
            type: String,
            default: ""
        }
    }
};
</script>
