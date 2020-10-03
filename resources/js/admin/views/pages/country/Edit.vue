<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <button
                class="btn btn-outline-primary"
                @click.stop="isVisible = true"
            >
                Add new
            </button>
        </div>
        <base-modal v-model="isVisible" hide-footer size="xl">
            <h2 slot="header" class="modal-title">{{ title }}</h2>
            <template>
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <form @submit.stop.prevent="handleSubmit(onSubmit)">
                        <base-input
                            alternative
                            v-model="form.title"
                            name="title"
                            class="mb-3"
                            placeholder="Enter title"
                            rules="required"
                            label="Title"
                        >
                        </base-input>
                        <base-input label="Place">
                            <base-select
                                v-model="form.is_nation"
                                :options="NATIONS_STATUS"
                                option-label="label"
                                option-value="value"
                            >
                            </base-select>
                        </base-input>
                        <div class="d-flex justify-content-end my-2">
                            <button
                                class="btn btn-white"
                                @click.prevent="onReset"
                            >
                                Close
                            </button>
                            <button class="btn btn-primary" type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </validation-observer>
            </template>
        </base-modal>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { NATIONS_STATUS } from "@/utils/constants";
export default {
    props: {
        item: { type: Object }
    },
    data() {
        return {
            NATIONS_STATUS,
            title: "Add new country",
            isVisible: false,
            form: {
                title: "",
                is_nation: 0
            }
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const { title, is_nation } = val;
                this.form = {
                    title,
                    is_nation
                };
                this.title = "Update country";
            } else {
                this.onReset();
                this.title = "Add new country";
            }
        },
        isVisible(val) {
            if (!val) {
                this.$emit("change", null);
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit("onSubmit", this.form);
            this.onReset();
        },
        onReset() {
            this.form = {
                title: "",
                is_nation: 0
            };
            this.isVisible = false;
        }
    }
};
</script>
