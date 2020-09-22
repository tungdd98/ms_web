<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <base-button type="outline-primary" @click="isVisible = true">
                Add new
            </base-button>
        </div>
        <modal :show.sync="isVisible" size="xl" body-classes="p-0" hide-footer>
            <h2 slot="header" class="modal-title">{{ title }}</h2>
            <div class="p-4">
                <template>
                    <validation-observer
                        ref="observer"
                        v-slot="{ handleSubmit }"
                    >
                        <b-form
                            role="form"
                            ref="form"
                            @submit.stop.prevent="handleSubmit(onSubmit)"
                        >
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
                                <select
                                    class="form-control"
                                    v-model="form.is_nation"
                                >
                                    <option
                                        :value="place.value"
                                        v-for="place in IS_NATION"
                                        :key="place.value"
                                        >{{ place.label }}</option
                                    >
                                </select>
                            </base-input>
                            <div class="d-flex justify-content-end my-2">
                                <base-button type="white" @click="onReset"
                                    >Close
                                </base-button>
                                <base-button
                                    type="primary"
                                    native-type="submit"
                                >
                                    Save
                                </base-button>
                            </div>
                        </b-form>
                    </validation-observer>
                </template>
            </div>
        </modal>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { IS_NATION } from "@/utils/constants";
export default {
    props: {
        item: { type: Object }
    },
    data() {
        return {
            IS_NATION,
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
