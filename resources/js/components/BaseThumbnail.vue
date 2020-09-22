<template>
    <span class="avatar rounded-circle mr-3">
        <img
            :src="thumbnail ? `images/upload/${path}/${thumbnail}` : noimage"
        />
    </span>
</template>

<script>
import noimage from "~/noimages.png";
export default {
    name: "base-thumbnail",
    props: {
        path: { type: String },
        thumbnail: { type: [String, Object] }
    },
    data() {
        return {
            noimage
        };
    }
};
</script>
