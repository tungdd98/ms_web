<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List User</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="listUser"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:title="{ row }">
                        <div class="media align-items-center">
                            <base-thumbnail
                                path="users"
                                :thumbnail="row.avatar"
                            ></base-thumbnail>
                            <div class="media-body">
                                <span>{{ row.name }}</span>
                            </div>
                        </div>
                    </template>
                    <template v-slot:permission="{ row }">
                        <span>
                            {{ row.permission === 0 ? "Member" : "Admin" }}
                        </span>
                    </template>
                </base-table>
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
            },
            fields: [
                {
                    label: "Name",
                    key: "name"
                },
                {
                    label: "Email",
                    key: "email"
                },
                {
                    label: "Permission",
                    key: "permission"
                },
                {
                    label: "Phone",
                    key: "phone"
                },
                {
                    label: "Nation",
                    key: "nation"
                },
                {
                    label: "Address",
                    key: "address"
                }
            ]
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable,
            userInfo: state => state.authenticate.userInfo
        }),
        listUser() {
            if (this.users && this.users.length && this.userInfo) {
                return this.users.filter(user => user.id !== this.userInfo.id);
            }
            return [];
        }
    },
    async created() {
        await this.fetchData(this.config);
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
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addUser(formData)
                : await this.updateUser({
                      id: this.currentItem.id,
                      data: formData
                  });

            if (res.success) {
                this.notify(res.message);
                this.fetchData(this.config);
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteUser(id);

                if (res.success) {
                    this.notify(res.message);
                    this.fetchData(this.config);
                }
            }
        },
        async onChangePage(page) {
            this.config.page = page;
            await this.fetchData({
                ...this.config,
                page
            });
        },
        setCurrentItem(value) {
            this.currentItem = value;
        }
    }
};
</script>
