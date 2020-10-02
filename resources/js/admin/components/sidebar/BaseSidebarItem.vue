<template>
    <li class="navbar__item">
        <component
            :is="tag"
            :to="link.to || ''"
            :class="['navbar__link', linkClass]"
            @click="toggleMenu"
        >
            <span class="d-flex align-items-center">
                <i :class="link.icon"></i>
                <span>{{ link.title }}</span>
            </span>
            <i
                v-if="hasChildren"
                :class="[
                    'icon font-12 carret',
                    !isOpen ? 'icon-chevron-right' : 'icon-chevron-down'
                ]"
            ></i>
        </component>
        <collapse-transition>
            <div v-show="isOpen" v-if="hasChildren">
                <ul>
                    <slot></slot>
                </ul>
            </div>
        </collapse-transition>
    </li>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";
export default {
    name: "base-sidebar-item",
    components: {
        CollapseTransition
    },
    props: {
        link: {
            type: Object,
            default: () => ({
                name: "",
                to: "",
                icon: ""
            })
        },
        linkClass: [String, Object]
    },
    computed: {
        hasChildren() {
            return this.$slots.default;
        },
        tag() {
            return this.$slots.default ? "span" : "router-link";
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
        }
    }
};
</script>
