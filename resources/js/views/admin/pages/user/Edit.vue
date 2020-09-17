<template>
    <div>
        <div class="d-flex justify-content-end p-2">
            <base-button type="outline-primary" @click="isVisible = true">
                Add new
            </base-button>
        </div>
        <modal :show.sync="isVisible" size="xl" body-classes="p-0" hide-footer>
            <h2 slot="header" class="modal-title">{{ title }}</h2>
            <card
                type="secondary"
                header-classes="bg-transparent pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0 mb-0"
            >
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
                                rules="required|alpha"
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
                                rules="numeric"
                                label="Phone"
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
            </card>
        </modal>
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
            title: "Add new user",
            isVisible: false,
            form: {
                name: "",
                email: "",
                address: "",
                phone: "",
                avatar: null
            },
            thumbnail: ""
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const { name, email, address, phone, avatar } = val;
                this.form = {
                    name,
                    email,
                    address,
                    phone,
                    avatar
                };
                this.thumbnail = avatar;
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit("onSubmit", this.form);
            this.onReset();
        },
        onUpload(file) {
            this.form.avatar = file[0];
        },
        onReset() {
            this.form = {
                name: "",
                email: "",
                address: "",
                phone: "",
                avatar: null
            };
            this.isVisible = false;
        }
    }
};
</script>
