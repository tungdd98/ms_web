<template>
    <div class="ms-select" :tabindex="tabIndex" @blur="isOpen = false">
        <div
            :class="['selected', { open: isOpen, 'text-gray': !typeSelected }]"
            @click="isOpen = !isOpen"
        >
            {{ typeSelected ? selected[optionLabel] : selected }}
        </div>
        <SlideYUpTransition :duration="animationDuration">
            <div class="items" v-show="isOpen">
                <template v-if="options.length">
                    <div
                        v-for="option in options"
                        :key="option[optionValue]"
                        @click="onSelected(option)"
                        :value="value"
                    >
                        {{ option[optionLabel] }}
                    </div>
                </template>
                <p v-else class="py-1 text-center">
                    No data select
                </p>
            </div>
        </SlideYUpTransition>
    </div>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";
export default {
    name: "base-select",
    components: {
        SlideYUpTransition
    },
    props: {
        options: {
            type: Array,
            required: true,
            default: []
        },
        tabIndex: {
            type: Number,
            default: 0
        },
        default: {
            type: String,
            default: null
        },
        value: {
            type: [String, Number]
        },
        animationDuration: {
            type: Number,
            default: 300
        },
        optionLabel: {
            type: String,
            default: "title"
        },
        optionValue: {
            type: [String, Number],
            default: "id"
        }
    },
    data() {
        return {
            isOpen: false,
            selected: this.default
                ? this.default
                : this.options.length > 0
                ? this.options[0]
                : null
        };
    },
    computed: {
        typeSelected() {
            return typeof this.selected === "object";
        }
    },
    methods: {
        onSelected(option) {
            this.selected = option;
            this.isOpen = false;
            this.$emit("input", option[this.optionValue]);
        }
    }
};
</script>
<style lang="scss" scoped>
.ms-select {
    position: relative;
    width: 100%;
    outline: none;
    height: 40px;
    line-height: 40px;
    transition: all 0.2s ease;
    font-size: 14px;
    .selected {
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #cad1d7;
        padding-left: 1em;
        cursor: pointer;
        user-select: none;
        &::after {
            position: absolute;
            content: "";
            top: 22px;
            right: 1em;
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-color: #666 transparent transparent transparent;
            transition: all 0.3s ease;
        }
    }
    .open {
        border: 1px solid #5e72e4;
        &::after {
            transform: rotate(-180deg) translateY(100%);
        }
    }
    .items {
        position: absolute;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid #e4e7ed;
        background-color: #fff;
        top: calc(100% + 10px);
        left: 0;
        right: 0;
        z-index: 1;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        div {
            color: #666;
            padding-left: 1em;
            cursor: pointer;
            user-select: none;
            transition: 0.2s ease;
            &:hover {
                background-color: #5e72e4;
                color: #fff;
            }
        }
    }
}
</style>
