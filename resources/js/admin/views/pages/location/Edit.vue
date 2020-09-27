<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <button class="btn btn-outline-primary" @click="isVisible = true">
                Add new
            </button>
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
                            <base-input label="Country">
                                <select
                                    class="form-control"
                                    v-model="form.country_id"
                                >
                                    <option value="">-- Select --</option>
                                    <option
                                        :value="country.id"
                                        v-for="country in countries"
                                        :key="country.id"
                                        >{{ country.title }}</option
                                    >
                                </select>
                            </base-input>
                            <base-input label="Is start">
                                <select
                                    class="form-control"
                                    v-model="form.is_start"
                                >
                                    <option
                                        :value="item.value"
                                        v-for="item in STARTS_STATUS"
                                        :key="item.value"
                                        >{{ item.label }}</option
                                    >
                                </select>
                            </base-input>
                            <base-input label="Description">
                                <textarea
                                    class="form-control"
                                    rows="3"
                                    v-model="form.description"
                                ></textarea>
                            </base-input>
                            <base-upload-avatar
                                label="Thumbnail"
                                @onUpload="onUpload"
                                :image="image"
                            ></base-upload-avatar>
                            <div class="d-flex justify-content-end my-2">
                                <button class="btn btn-white" @click="onReset">
                                    Close
                                </button>
                                <button class="btn btn-primary" type="submit">
                                    Save
                                </button>
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
import { STARTS_STATUS } from "@/admin/utils/constants";
export default {
    props: {
        item: { type: Object },
        countries: { type: Array, default: [] }
    },
    data() {
        return {
            STARTS_STATUS,
            title: "Add new location",
            isVisible: false,
            form: {
                title: "",
                description: "",
                is_start: 0,
                thumbnail: "",
                country_id: ""
            },
            image: ""
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const {
                    title,
                    description,
                    is_start,
                    thumbnail,
                    country_id
                } = val;
                this.form = {
                    title,
                    description,
                    thumbnail: thumbnail || "",
                    is_start,
                    country_id: country_id || ""
                };
                this.image = thumbnail
                    ? `images/upload/locations/${thumbnail}`
                    : "";
                this.title = "Update location";
            } else {
                this.onReset();
                this.title = "Add new location";
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
        onUpload(file) {
            this.form.thumbnail = file[0].raw;
        },
        onReset() {
            this.form = {
                title: "",
                description: "",
                is_start: 0,
                thumbnail: "",
                country_id: ""
            };
            this.image = "";
            this.isVisible = false;
        }
    }
};
</script>
