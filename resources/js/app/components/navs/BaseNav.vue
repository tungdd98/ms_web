<template>
    <li>
        <component :is="tag" :to="link.to || ''" @click.stop="toggleMenu">
            <span>{{ link.title }}</span>
        </component>
        <collapse-transition>
            <div
                class="ms-sub"
                v-show="isOpen"
                v-if="hasChildren"
                v-click-outside="closeMenu"
            >
                <slot></slot>
            </div>
        </collapse-transition>
    </li>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";
export default {
    name: "base-nav",
    components: {
        CollapseTransition
    },
    props: {
        link: {
            type: Object,
            default: () => ({
                name: "",
                to: ""
            })
        },
        linkClass: {
            type: [Object, String]
        }
    },
    computed: {
        hasChildren() {
            return this.$slots.default;
        },
        tag() {
            return this.$slots.default ? "div" : "router-link";
        }
    },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        }
    }
};
</script>
