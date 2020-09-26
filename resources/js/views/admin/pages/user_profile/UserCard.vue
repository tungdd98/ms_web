<template>
    <div class="position-relative bg-white shadow-sm border rounded p-3">
        <div class="card-profile-image">
            <img
                :src="
                    userInfo.avatar
                        ? `images/upload/users/${userInfo.avatar}`
                        : noimage
                "
                class="rounded-circle"
            />
        </div>

        <div class="text-center mt-3">
            <h5 class="h3">
                {{ userInfo.name }}
            </h5>
            <div class="h5">
                <i class="icon icon-phone mr-2"></i> {{ userInfo.phone }}
            </div>
            <div class="h5 mt-2">
                <i class="icon icon-paperclip"></i>
                {{ userInfo.email }}
            </div>
            <div class="h5 mt-2">
                <i class="icon icon-key"></i> {{ userInfo.nation }}
            </div>
            <hr class="my-4" />
            <p class="font-14">
                {{ userInfo.address }}
            </p>
        </div>
    </div>
</template>
<script>
import noimage from "~/noimages.png";
export default {
    props: {
        userInfo: { type: Object }
    },
    data() {
        return {
            noimage
        };
    }
};
</script>
<style lang="scss" scoped>
.card-profile-image {
    text-align: center;
    img {
        min-width: 180px;
        max-width: 180px;
        height: 180px;
        object-fit: cover;
    }
}
</style>
