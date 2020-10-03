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
                    <form
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
export default {
    props: {
        item: { type: Object }
    },
    data() {
        return {
            title: "Add new time tour",
            isVisible: false,
            form: {
                title: ""
            }
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const { title } = val;
                this.form = {
                    title
                };
                this.title = "Update time tour";
            } else {
                this.onReset();
                this.title = "Add new time tour";
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
                title: ""
            };
            this.isVisible = false;
        }
    }
};
</script>
