<template>
    <div>
        <div class="container-fluid mt--7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Country</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <el-table
                    class="table-responsive table w-100"
                    header-row-class-name="thead-light"
                    :data="countries"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="icon icon-settings circular"
                >
                    <el-table-column label="Country" prop="title">
                    </el-table-column>
                    <el-table-column label="Place" prop="is_nation">
                        <template v-slot="{ row }">
                            <span>
                                {{
                                    row.is_nation === 0
                                        ? "Trong nước"
                                        : "Ngoài nước"
                                }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Actions" width="120">
                        <template v-slot="{ row }">
                            <div class="d-flex font-20">
                                <div
                                    class="cursor-pointer px-1"
                                    @click="setCurrentItem(row)"
                                >
                                    <span
                                        class="icon icon-edit text-success"
                                    ></span>
                                </div>
                                <div
                                    class="cursor-pointer px-1"
                                    @click="onDelete(row.id)"
                                >
                                    <span
                                        class="icon icon-trash-2 text-danger"
                                    ></span>
                                </div>
                            </div>
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
            countries: null,
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            }
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable,
            userInfo: state => state.authenticate.userInfo
        })
    },
    async created() {
        await this.fetchData(this.config);
    },
    methods: {
        ...mapActions({
            getCountries: "country/getCountries",
            addCountry: "country/addCountry",
            deleteCountry: "country/deleteCountry",
            updateCountry: "country/updateCountry"
        }),
        async fetchData(query) {
            const data = await this.getCountries(query);

            if (data) {
                this.countries = data.countries || [];
                this.totalRecord = data.total;
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addCountry(formData)
                : await this.updateCountry({
                      id: this.currentItem.id,
                      data: formData
                  });

            if (res.success) {
                this.notify(res.message);
                this.fetchData();
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteCountry(id);

                if (res.success) {
                    this.notify(res.message);
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
