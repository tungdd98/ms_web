<template>
    <div
        class="custom-control custom-checkbox"
        :class="[
            { disabled: disabled },
            { [`custom-checkbox-${type}`]: type },
            inlineClass
        ]"
    >
        <input
            :id="cbId"
            class="custom-control-input"
            :class="inputClasses"
            type="checkbox"
            :disabled="disabled"
            v-model="model"
        />
        <label :for="cbId" class="custom-control-label">
            <slot>
                <span v-if="inline">&nbsp;</span>
            </slot>
        </label>
    </div>
</template>
<script>
export default {
    name: "base-checkbox",
    model: {
        prop: "checked"
    },
    props: {
        checked: {
            type: [Array, Boolean]
        },
        disabled: {
            type: Boolean
        },
        inline: {
            type: Boolean
        },
        inputClasses: {
            type: [String, Object, Array]
        },
        type: {
            type: String
        }
    },
    data() {
        return {
            cbId: "",
            touched: false
        };
    },
    computed: {
        model: {
            get() {
                return this.checked;
            },
            set(check) {
                if (!this.touched) {
                    this.touched = true;
                }
                this.$emit("input", check);
            }
        },
        inlineClass() {
            if (this.inline) {
                return `form-check-inline`;
            }
        }
    },
    created() {
        this.cbId = Math.random()
            .toString(16)
            .slice(2);
    }
};
</script>
