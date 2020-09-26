<template>
    <div class="position-relative shadow-sm border rounded bg-white p-3">
        <b-form @submit.prevent="updateProfile">
            <h6 class="font-12 text-uppercase text-muted mb-4">
                User information
            </h6>
            <div class="pl-lg-4">
                <div class="row">
                    <div class="col-lg-6">
                        <base-input
                            type="text"
                            label="Name"
                            placeholder="Enter your name"
                            v-model="user.name"
                        >
                        </base-input>
                    </div>
                    <div class="col-lg-6">
                        <base-input
                            type="email"
                            label="Email email"
                            placeholder="Enter your email"
                            v-model="user.email"
                        >
                        </base-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input
                            type="text"
                            label="Phone"
                            placeholder="Enter your phone number"
                            v-model="user.phone"
                        >
                        </base-input>
                    </div>
                    <div class="col-lg-6">
                        <base-input label="Nation">
                            <select class="form-control" v-model="user.nation">
                                <option value>-- Select --</option>
                                <option
                                    :value="nation"
                                    v-for="(nation, index) in NATIONS"
                                    :key="index"
                                    >{{ nation }}</option
                                >
                            </select>
                        </base-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <base-upload-avatar
                            label="Avatar"
                            @onUpload="onUpload"
                            :image="thumbnail"
                        ></base-upload-avatar>
                    </div>
                </div>
            </div>

            <hr class="my-4" />
            <h6 class="font-12 text-uppercase text-muted mb-4">
                Address
            </h6>
            <div class="pl-lg-4">
                <div
                    label="Address detail"
                    label-class="form-control-label"
                    class="mb-0 form-group"
                    label-for="about-form-textaria"
                >
                    <textarea
                        class="form-control"
                        rows="3"
                        v-model="user.address"
                    ></textarea>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
                <button class="btn btn-primary" type="submit">
                    Save change
                </button>
            </div>
        </b-form>
    </div>
</template>
<script>
import { NATIONS } from "@/utils/constants";
import { mapActions, mapMutations } from "vuex";
export default {
    props: {
        userInfo: { type: Object }
    },
    data() {
        return {
            NATIONS,
            user: {
                name: "",
                email: "",
                phone: "",
                address: "",
                nation: "",
                avatar: "",
                permission: 1
            },
            thumbnail: ""
        };
    },
    created() {
        const { name, email, phone, address, avatar, nation } = this.userInfo;
        this.user = {
            name,
            email,
            phone: phone || "",
            address: address || "",
            avatar: avatar || "",
            nation: nation ? nation : ""
        };
        this.thumbnail = avatar ? `images/upload/users/${avatar}` : "";
    },
    methods: {
        ...mapActions({
            updateUser: "user/updateUser"
        }),
        ...mapMutations({
            setUserInfo: "authenticate/setUserInfo"
        }),
        async updateProfile() {
            const formData = new FormData();
            Object.entries(this.user).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const response = await this.updateUser({
                id: this.userInfo.id,
                data: formData
            });

            if (response.success) {
                this.notify("Update user profile successful");
                this.$cookie.set(
                    "user_ms_web",
                    JSON.stringify(response.success)
                );
                this.setUserInfo(response.success);
            }
        },
        onUpload(file) {
            this.user.avatar = file[0].raw;
        }
    }
};
</script>
