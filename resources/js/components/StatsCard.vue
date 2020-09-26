<template>
    <div class="bg-white p-3 rounded shadow-sm">
        <div class="row">
            <div class="col">
                <slot>
                    <h5 class="text-uppercase text-muted mb-0" v-if="title">
                        {{ title }}
                    </h5>
                    <span class="h2 font-weight-bold mb-0" v-if="subTitle">{{
                        subTitle
                    }}</span>
                </slot>
            </div>

            <div class="col-auto" v-if="$slots.icon || icon">
                <slot name="icon">
                    <div
                        class="icon icon-shape text-white rounded-circle shadow"
                        :class="[`bg-${type}`, iconClasses]"
                    >
                        <i :class="icon"></i>
                    </div>
                </slot>
            </div>
        </div>

        <p class="mt-3 mb-0 text-sm">
            <slot name="footer"> </slot>
        </p>
    </div>
</template>
<script>
export default {
    name: "stats-card",
    props: {
        type: {
            type: String,
            default: "primary"
        },
        icon: String,
        title: String,
        subTitle: String,
        iconClasses: [String, Array]
    }
};
</script>
