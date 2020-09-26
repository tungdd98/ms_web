<template>
    <div>
        <div class="container-fluid mt--7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Tour</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :locations="locations"
                    :times-tour="timesTour"
                    :vehicle-tour="vehicleTour"
                    @change="setCurrentItem"
                ></edit>
                <el-table
                    class="table-responsive table w-100"
                    header-row-class-name="thead-light"
                    :data="tours"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="icon icon-settings circular"
                >
                    <el-table-column label="Title" prop="title" width="250">
                        <template v-slot="{ row }">
                            <b-media no-body class="align-items-center">
                                <base-thumbnail
                                    path="tours"
                                    :thumbnail="row.thumbnail"
                                ></base-thumbnail>
                                <b-media-body>
                                    <span>{{ row.title }}</span>
                                </b-media-body>
                            </b-media>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="Departure"
                        prop="departure_location_name"
                    >
                    </el-table-column>
                    <el-table-column
                        label="Destination"
                        prop="destination_location_name"
                    >
                    </el-table-column>
                    <el-table-column label="Time name" prop="time_name">
                    </el-table-column>
                    <el-table-column label="Vehicle name" prop="vehicle_name">
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
            tours: null,
            locations: [],
            timesTour: [],
            vehicleTour: [],
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
        await Promise.all([
            this.fetchData(this.config),
            this.fetchLocations(),
            this.fetchTimesTour(),
            this.fetchVehicleTour()
        ]);
    },
    methods: {
        ...mapActions({
            getTours: "tour/getTours",
            addTour: "tour/addTour",
            deleteTour: "tour/deleteTour",
            updateTour: "tour/updateTour",
            getLocations: "location/getLocations",
            getTimesTour: "timeTour/getTimesTour",
            getVehicleTour: "vehicleTour/getVehicleTour"
        }),
        async fetchData(query) {
            const data = await this.getTours(query);

            if (data) {
                this.tours = data.tours || [];
                this.totalRecord = data.total;
            }
        },
        async fetchLocations() {
            const data = await this.getLocations();

            if (data) {
                this.locations = data.locations || [];
            }
        },
        async fetchTimesTour() {
            const data = await this.getTimesTour();

            if (data) {
                this.timesTour = data.time_tour || [];
            }
        },
        async fetchVehicleTour() {
            const data = await this.getVehicleTour();

            if (data) {
                this.vehicleTour = data.vehicle_tour || [];
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addTour(formData)
                : await this.updateTour({
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
                const res = await this.deleteTour(id);

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
