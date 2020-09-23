<template>
    <div>
        <b-container fluid class="mt--5" v-if="userInfo">
            <b-row>
                <b-col xl="4" class="order-xl-2 mb-5">
                    <user-card :user-info="userInfo"></user-card>
                </b-col>
                <b-col xl="8" class="order-xl-1">
                    <edit-profile-form
                        :user-info="userInfo"
                    ></edit-profile-form>
                </b-col>
            </b-row>
        </b-container>
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
