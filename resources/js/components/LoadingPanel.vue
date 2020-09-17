<template>
    <b-row v-loading="true" id="loading"></b-row>
</template>
<script>
import Vue from "vue";
import { Loading } from "element-ui";

Vue.use(Loading.directive);
export default {};
</script>
<style>
#loading {
    min-height: 200px;
    display: flex;
    align-items: center;
}

.el-loading-spinner .path {
    stroke: #66615b !important;
}

.el-loading-mask {
    background: hsla(0, 0%, 100%, 0.9) !important;
}
</style>
