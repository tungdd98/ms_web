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
                            v-model="form.name"
                            name="name"
                            class="mb-3"
                            placeholder="Enter name"
                            rules="required"
                            label="Name"
                        >
                        </base-input>
                        <base-input
                            alternative
                            v-model="form.email"
                            name="email"
                            class="mb-3"
                            placeholder="Enter email"
                            rules="required|email"
                            label="Email"
                        >
                        </base-input>
                        <base-input
                            alternative
                            v-model="form.phone"
                            name="phone"
                            class="mb-3"
                            placeholder="Enter phone"
                            label="Phone"
                        >
                        </base-input>
                        <base-input label="Nation">
                            <base-select
                                v-model="form.nation"
                                :options="NATIONS"
                                option-label="label"
                                option-value="label"
                            >
                            </base-select>
                        </base-input>
                        <base-input label="Permission">
                            <base-select
                                v-model="form.permission"
                                :options="PERMISSIONS"
                                option-label="label"
                                option-value="value"
                            >
                            </base-select>
                        </base-input>
                        <base-input
                            label="Password"
                            alternative
                            class="mb-3"
                            placeholder="Password"
                            type="password"
                            name="Password"
                            :rules="{ required: true, min: 6 }"
                            :disabled="item ? true : false"
                            v-model="form.password"
                        >
                        </base-input>
                        <base-input label="Address">
                            <textarea
                                class="form-control"
                                rows="3"
                                v-model="form.address"
                            ></textarea>
                        </base-input>
                        <base-upload-avatar
                            label="Avatar"
                            @onUpload="onUpload"
                            :image="thumbnail"
                        ></base-upload-avatar>
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
import { NATIONS, PERMISSIONS } from "@/utils/constants";
export default {
    props: {
        item: { type: Object }
    },
    data() {
        return {
            NATIONS,
            PERMISSIONS,
            title: "Add new user",
            isVisible: false,
            form: {
                name: "",
                email: "",
                address: "",
                phone: "",
                nation: "",
                permission: 0,
                password: "",
                avatar: ""
            },
            thumbnail: ""
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const {
                    name,
                    email,
                    address,
                    phone,
                    avatar,
                    nation,
                    permission
                } = val;
                this.form = {
                    name,
                    email,
                    address: address || "",
                    phone: phone || "",
                    avatar: avatar || "",
                    nation: nation || "",
                    permission
                };
                this.thumbnail = avatar ? `images/upload/users/${avatar}` : "";
                this.title = "Update user";
            } else {
                this.onReset();
                this.title = "Add new user";
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
            this.form.avatar = file[0].raw;
        },
        onReset() {
            this.form = {
                name: "",
                email: "",
                address: "",
                phone: "",
                nation: "",
                permission: 0,
                password: "",
                avatar: ""
            };
            this.thumbnail = "";
            this.isVisible = false;
        }
    }
};
</script>
