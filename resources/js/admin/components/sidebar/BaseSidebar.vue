<template>
    <nav class="ms-nav">
        <div class="ms-nav__logo flex-center px-3 py-4">
            <a :href="homeUrl" target="_blank">
                <img src="images/brand/green.png" alt="..." />
            </a>
        </div>
        <ul class="ms-nav__navbar">
            <slot name="links"> </slot>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "base-sidebar",
    data() {
        return {
            homeUrl: process.env.MIX_APP_URL
        };
    }
};
</script>
