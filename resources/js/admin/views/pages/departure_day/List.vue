<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Departure Day</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :tours="tours"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="departureDay"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:start_day="{ row }">
                        <span>{{ row.start_day | formatDate }}</span>
                    </template>
                    <template v-slot:start_time="{ row }">
                        <span>{{ row.start_day | formatTime }}</span>
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
            departureDay: null,
            tours: [],
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            },
            fields: [
                {
                    label: "Tour name",
                    key: "tour_name"
                },
                {
                    label: "Start day",
                    key: "start_day"
                },
                {
                    label: "Start time",
                    key: "start_time"
                }
            ]
        };
    },
    computed: {
        ...mapState({
            loading: state => state.display.isLoadingTable,
            userInfo: state => state.authenticate.userInfo
        })
    },
    async created() {
        await Promise.all([this.fetchData(this.config), this.fetchTours()]);
    },
    methods: {
        ...mapActions({
            getDepartureDay: "departureDay/getDepartureDay",
            addDepartureDay: "departureDay/addDepartureDay",
            deleteDepartureDay: "departureDay/deleteDepartureDay",
            updateDepartureDay: "departureDay/updateDepartureDay",
            getTours: "tour/getTours"
        }),
        async fetchData(query) {
            const data = await this.getDepartureDay(query);

            if (data) {
                this.departureDay = data.departure_day || [];
                this.totalRecord = data.total;
            }
        },
        async fetchTours() {
            const data = await this.getTours();

            if (data) {
                this.tours = data.tours || [];
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addDepartureDay(formData)
                : await this.updateDepartureDay({
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
                const res = await this.deleteDepartureDay(id);

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
