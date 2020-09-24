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
                                <select
                                    class="form-control"
                                    v-model="form.nation"
                                >
                                    <option value>-- Select --</option>
                                    <option
                                        :value="nation"
                                        v-for="(nation, index) in NATIONS"
                                        :key="index"
                                        >{{ nation }}</option
                                    >
                                </select>
                            </base-input>
                            <base-input label="Permission">
                                <select
                                    class="form-control"
                                    v-model="form.permission"
                                >
                                    <option
                                        :value="permission.value"
                                        v-for="permission in PERMISSIONS"
                                        :key="permission.value"
                                        >{{ permission.label }}</option
                                    >
                                </select>
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
