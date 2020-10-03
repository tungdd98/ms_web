<template>
    <SlideYUpTransition :duration="animationDuration">
        <div class="modal modal-backdrop" v-if="value">
            <div
                :class="['modal-dialog modal-dialog-centered', sizeModal]"
                v-click-outside="hide"
            >
                <div class="modal-content">
                    <div :class="['modal-header', headerClass]">
                        <slot name="header">
                            <h4>Modal</h4>
                        </slot>
                    </div>
                    <div :class="['modal-body', bodyClass]">
                        <slot></slot>
                    </div>
                    <slot name="footer" v-if="!hideFooter">
                        <div :class="['modal-footer', footerClass]">
                            <div class="d-flex justify-content-end my-2">
                                <button
                                    class="btn btn-white"
                                    @click.prevent="hide"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </SlideYUpTransition>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";
export default {
    name: "base-modal",
    components: {
        SlideYUpTransition
    },
    props: {
        value: {
            type: Boolean,
            required: true
        },
        animationDuration: {
            type: Number,
            default: 500
        },
        hideFooter: {
            type: Boolean
        },
        size: {
            type: String,
            default: "sm",
            validator(value) {
                let acceptedValues = ["", "sm", "lg", "xl", "fluid"];
                return acceptedValues.includes(value);
            }
        },
        headerClass: {
            type: [String, Object]
        },
        footerClass: {
            type: [String, Object]
        },
        bodyClass: {
            type: [String, Object]
        }
    },
    computed: {
        sizeModal() {
            return `modal-${this.size}`;
        }
    },
    watch: {
        value(val) {
            val
                ? document.body.classList.add("modal-open")
                : document.body.classList.remove("modal-open");
        }
    },
    methods: {
        hide() {
            this.$emit("input", !this.value);
        }
    }
};
</script>
<style lang="scss" scoped>
.modal {
    display: block;
}
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
}
.ms-modal {
    position: absolute;
    z-index: 1040;
}
.modal-fluid {
    max-width: 90% !important;
}
</style>
