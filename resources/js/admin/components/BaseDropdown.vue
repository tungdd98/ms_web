<template>
    <component
        :is="tag"
        :class="[`drop${direction}`, { show: isOpen }]"
        @click="toggleDropdown"
        v-click-outside="closeDropdown"
    >
        <slot name="title-container" :is-open="isOpen"> </slot>
        <transition name="fade" mode="out-in">
            <ul
                :class="[
                    'dropdown-menu',
                    { 'dropdown-menu-right': menuOnRight },
                    menuClass
                ]"
                v-if="isOpen"
            >
                <slot></slot>
            </ul>
        </transition>
    </component>
</template>

<script>
export default {
    name: "base-dropdown",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        direction: {
            type: String,
            default: "down",
            validator(value) {
                const accessValues = ["up", "down"];
                return accessValues.includes(value);
            }
        },
        menuOnRight: {
            type: Boolean,
            default: false
        },
        menuClass: {
            type: [String, Object]
        }
    },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
            this.$emit("change", this.isOpen);
        },
        closeDropdown() {
            this.isOpen = false;
            this.$emit("change", false);
        }
    }
};
</script>
<style lang="scss" scoped>
.dropdown {
    cursor: pointer;
    user-select: none;
}
</style>
