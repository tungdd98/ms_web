<template>
    <div>
        <div class="container-fluid mt--7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List User</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <el-table
                    class="table-responsive table w-100"
                    header-row-class-name="thead-light"
                    :data="users"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="ni ni-settings-gear-65 circular"
                >
                    <el-table-column label="Name" prop="name" width="250">
                        <template v-slot="{ row }">
                            <b-media no-body class="align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                    <img
                                        alt="Image placeholder"
                                        :src="row.avatar"
                                    />
                                </a>
                                <b-media-body>
                                    <span
                                        class="font-weight-600 name mb-0 text-sm"
                                        >{{ row.name }}</span
                                    >
                                </b-media-body>
                            </b-media>
                        </template>
                    </el-table-column>
                    <el-table-column label="Email" prop="email" width="210">
                    </el-table-column>
                    <el-table-column label="Phone" prop="phone" width="145">
                    </el-table-column>
                    <el-table-column label="Nation" prop="nation" width="120">
                    </el-table-column>
                    <el-table-column label="Address" prop="address">
                    </el-table-column>
                    <el-table-column label="Actions" width="120">
                        <template v-slot="{ row }">
                            <base-button
                                size="sm"
                                type="success"
                                icon
                                @click="setCurrentItem(row)"
                            >
                                <span class="icon-edit"></span>
                            </base-button>
                            <base-button
                                size="sm"
                                type="danger"
                                icon
                                @click="onDelete(row.id)"
                            >
                                <span class="icon-trash"></span>
                            </base-button>
                        </template>
                    </el-table-column>
                </el-table>

                <div class="py-4 d-flex justify-content-end">
                    <pagination
                        :total="totalRecord"
                        v-model="config.page"
                        @change="onChangePage"
                    ></pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Edit from "./Edit";
import { mapActions, mapState } from "vuex";
export default {
    components: {
        Edit
    },
    data() {
        return {
            users: null,
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            }
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable
        })
    },
    async created() {
        await this.fetchData(this.$route.query);
    },
    methods: {
        ...mapActions({
            getUsers: "user/getUsers",
            addUser: "user/addUser",
            deleteUser: "user/deleteUser",
            updateUser: "user/updateUser"
        }),
        async fetchData(query) {
            const data = await this.getUsers(query);

            if (data) {
                this.users = data.users || [];
                this.totalRecord = data.total;
            }
        },
        async onSubmit(data) {
            const res = !this.currentItem
                ? await this.addUser(data)
                : await this.updateUser({
                      id: this.currentItem.id,
                      data
                  });

            if (res.success) {
                this.notify(
                    !this.currentItem ? "Add success" : "Update success"
                );
                this.fetchData();
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteUser(id);

                if (res.success) {
                    this.notify("Delete success");
                    this.fetchData();
                }
            }
        },
        async onChangePage(page) {
            await this.fetchData({ page });
        },
        setCurrentItem(value) {
            this.currentItem = value;
        }
    }
};
</script>
