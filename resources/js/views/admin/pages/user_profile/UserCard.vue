<template>
    <b-card no-body class="card-profile" alt="Image placeholder" img-top>
        <b-row class="justify-content-center">
            <b-col lg="3" class="order-lg-2">
                <div class="card-profile-image">
                    <b-img
                        :src="
                            userInfo.avatar
                                ? `images/upload/users/${userInfo.avatar}`
                                : noimage
                        "
                        rounded="circle"
                    />
                </div>
            </b-col>
        </b-row>

        <b-card-body class="pt-0 mt-9">
            <div class="text-center">
                <h5 class="h3">
                    {{ userInfo.name }}
                </h5>
                <div class="h5 font-weight-300">
                    <i class="icon icon-phone mr-2"></i> {{ userInfo.phone }}
                </div>
                <div class="h5 mt-2">
                    <i class="icon icon-paperclip"></i>
                    {{ userInfo.email }}
                </div>
                <div><i class="icon icon-key"></i> {{ userInfo.nation }}</div>
                <hr class="my-4" />
                <p>
                    {{ userInfo.address }}
                </p>
            </div>
        </b-card-body>
    </b-card>
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
