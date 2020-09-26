<template>
    <div>
        <div class="container-fluid mt--7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Location</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :countries="countries"
                    @change="setCurrentItem"
                ></edit>
                <el-table
                    class="table-responsive table w-100"
                    header-row-class-name="thead-light"
                    :data="locations"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="icon icon-settings circular"
                >
                    <el-table-column label="Title" prop="title" width="250">
                        <template v-slot="{ row }">
                            <b-media no-body class="align-items-center">
                                <base-thumbnail
                                    path="locations"
                                    :thumbnail="row.thumbnail"
                                ></base-thumbnail>
                                <b-media-body>
                                    <span>{{ row.title }}</span>
                                </b-media-body>
                            </b-media>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="Description"
                        prop="description"
                        width="210"
                    >
                    </el-table-column>
                    <el-table-column label="Is start" prop="is_start">
                        <template v-slot="{ row }">
                            <span class="mb-0 text-sm">
                                {{ row.is_start === 0 ? "Không" : "Có" }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Country name" prop="country_name">
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
            locations: null,
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            },
            countries: []
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable,
            userInfo: state => state.authenticate.userInfo
        })
    },
    async created() {
        await Promise.all([this.fetchData(this.config), this.fetchCountries()]);
    },
    methods: {
        ...mapActions({
            getLocations: "location/getLocations",
            addLocation: "location/addLocation",
            deleteLocation: "location/deleteLocation",
            updateLocation: "location/updateLocation",
            getCountries: "country/getCountries"
        }),
        async fetchData(query) {
            const data = await this.getLocations(query);

            if (data) {
                this.locations = data.locations || [];
                this.totalRecord = data.total;
            }
        },
        async fetchCountries() {
            const data = await this.getCountries();

            if (data) {
                this.countries = data.countries || [];
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addLocation(formData)
                : await this.updateLocation({
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
                const res = await this.deleteLocation(id);

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
