<template>
    <div>
        <div class="container-fluid mt-n7">
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
                <base-table
                    :items="tours"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:title="{ row }">
                        <div class="media align-items-center">
                            <base-thumbnail
                                path="tours"
                                :thumbnail="row.thumbnail"
                            ></base-thumbnail>
                            <div class="media-body">
                                <span>{{ row.title }}</span>
                            </div>
                        </div>
                    </template>
                </base-table>
                <div class="py-4 d-flex justify-content-end">
                    <base-pagination :page-count="pageCount"></base-pagination>
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
            locations: null,
            timesTour: null,
            vehicleTour: null,
            currentItem: null,
            pageCount: 0,
            fields: [
                {
                    label: "Title",
                    key: "title"
                },
                {
                    label: "Departure",
                    key: "departure_location_name"
                },
                {
                    label: "Destination",
                    key: "destination_location_name"
                },
                {
                    label: "Time",
                    key: "time_name"
                },
                {
                    label: "Vehicle",
                    key: "vehicle_name"
                }
            ]
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable
        })
    },
    async created() {
        await Promise.all([
            this.fetchData(this.$route.query),
            this.fetchLocations(),
            this.fetchTimesTour(),
            this.fetchVehicleTour()
        ]);
    },
    async beforeRouteUpdate(to, from, next) {
        await this.fetchData(to.query);
        next();
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
                this.pageCount = data.last_page;
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
                await this.fetchData(this.$route.query);
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteTour(id);

                if (res.success) {
                    this.notify(res.message);
                    await this.fetchData(this.$route.query);
                }
            }
        },
        setCurrentItem(value) {
            this.currentItem = value;
        }
    }
};
</script>
