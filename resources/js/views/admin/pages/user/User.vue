<template>
    <div>
        <b-container fluid class="mt--7">
            <b-card no-body>
                <b-card-header class="border-0">
                    <h3 class="mb-0">List User</h3>
                </b-card-header>

                <el-table
                    class="table-responsive table"
                    header-row-class-name="thead-light"
                    :data="users"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="ni ni-settings-gear-65 circular"
                >
                    <el-table-column label="Name" min-width="310px" prop="name">
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
                    <el-table-column label="Email" prop="email">
                    </el-table-column>
                    <el-table-column label="Address" prop="address">
                    </el-table-column>
                    <el-table-column label="Phone" prop="phone">
                    </el-table-column>
                </el-table>

                <b-card-footer class="py-4 d-flex justify-content-end">
                    <base-pagination
                        v-model="currentPage"
                        :per-page="10"
                        :total="50"
                    ></base-pagination>
                </b-card-footer>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            currentPage: 1,
            users: null
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable
        })
    },
    async created() {
        await this.fetchData({ page: 1, limit: 10 });
    },
    methods: {
        ...mapActions({
            getUsers: "user/getUsers"
        }),
        async fetchData(query) {
            const data = await this.getUsers(query);

            if (data) {
                this.users = data.data || [];
            }
        }
    }
};
</script>
