<template>
    <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
        <slot>
            <span></span>
        </slot>
    </button>
</template>
<script>
export default {
    props: {
        target: {
            type: [String, Number],
            description: "Button target element"
        },
        toggled: {
            type: Boolean,
            default: false,
            description: "Whether button is toggled"
        }
    }
};
</script>
