<template>
    <div class="data-list table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="field in fields" :key="field.key">
                        {{ field.label }}
                    </th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <template v-if="items">
                <tbody v-if="items.length">
                    <tr v-for="(item, index) in items" :key="index">
                        <td v-for="field in fields" :key="field.key">
                            <slot :name="field.key" :row="item">
                                {{ item[field.key] }}
                            </slot>
                        </td>
                        <td style="width: 200px">
                            <slot name="actions" :row="item">
                                <div
                                    class="d-flex font-20 justify-content-center"
                                >
                                    <div
                                        class="cursor-pointer px-1"
                                        @click.stop="$emit('show', item)"
                                    >
                                        <span
                                            class="icon icon-edit text-success"
                                        ></span>
                                    </div>
                                    <div
                                        class="cursor-pointer px-1"
                                        @click="$emit('delete', item.id)"
                                    >
                                        <span
                                            class="icon icon-trash-2 text-danger"
                                        ></span>
                                    </div>
                                </div>
                            </slot>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr class="no-effect">
                        <td :colspan="fields.length + 1" class="text-center">
                            No data
                        </td>
                    </tr>
                </tbody>
            </template>
        </table>
        <base-loading></base-loading>
    </div>
</template>
<script>
import BaseLoading from "./BaseLoading";
export default {
    name: "base-table",
    components: {
        BaseLoading
    },
    props: {
        items: {
            type: Array,
            default: [],
            description: "Danh sách phần tử hiển thị"
        },
        fields: {
            type: Array,
            default: [],
            description: "Danh sách header"
        }
    }
};
</script>
