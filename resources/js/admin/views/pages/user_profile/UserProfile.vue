<template>
    <div>
        <div class="mt-n7 container-fluid" v-if="userInfo">
            <div class="row">
                <div class="order-xl-2 mb-5 col-xl-4">
                    <user-card :user-info="userInfo"></user-card>
                </div>
                <div class="order-xl-1 col-xl-8">
                    <edit-profile-form
                        :user-info="userInfo"
                    ></edit-profile-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EditProfileForm from "./EditProfileForm.vue";
import UserCard from "./UserCard.vue";
import { mapState } from "vuex";

export default {
    components: {
        EditProfileForm,
        UserCard
    },
    computed: {
        ...mapState({
            userInfo: state => state.authenticate.userInfo
        })
    }
};
</script>
