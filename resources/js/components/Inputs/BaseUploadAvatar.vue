<template>
    <div class="mt-2">
        <slot name="label">
            <label v-if="label" :class="labelClasses">
                {{ label }}
            </label>
        </slot>
        <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :auto-upload="false"
            :before-upload="beforeAvatarUpload"
            :on-change="handleUploadChange"
        >
            <img
                v-if="imageUrl"
                :src="imageUrl"
                class="avatar-uploader__image"
            />
            <img v-if="image" :src="image" class="avatar-uploader__image" />
            <i v-else class="avatar-uploader__icon icon-upload"></i>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: "base-upload-avatar",
    props: {
        label: { type: String },
        labelClasses: {
            type: String,
            default: "form-control-label"
        },
        image: { type: String }
    },
    data() {
        return {
            imageUrl: ""
        };
    },
    methods: {
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            return isJPG && isLt2M;
        },
        handleUploadChange(file, fileList) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$emit("onUpload", fileList);
        }
    }
};
</script>
<style lang="scss">
.avatar-uploader {
    max-width: 178px;
    min-width: 178px;
    height: 178px;
    margin-bottom: 20px;
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        height: 100%;
        text-align: center;
        &:hover {
            border-color: #409eff;
        }
    }
    &__icon {
        font-size: 46px !important;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px !important;
        text-align: center;
    }
    &__image {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
}
</style>
