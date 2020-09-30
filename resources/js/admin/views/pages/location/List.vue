<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Location</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :countries="countries"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="locations"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:title="{ row }">
                        <div class="media align-items-center">
                            <base-thumbnail
                                path="locations"
                                :thumbnail="row.thumbnail"
                            ></base-thumbnail>
                            <div class="media-body">
                                <span>{{ row.title }}</span>
                            </div>
                        </div>
                    </template>
                    <template v-slot:is_start="{ row }">
                        <span class="mb-0 text-sm">
                            {{ row.is_start === 0 ? "Không" : "Có" }}
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
            locations: null,
            currentItem: null,
            countries: null,
            totalRecord: 0,
            config: {
                page: 1
            },
            fields: [
                {
                    label: "Title",
                    key: "title"
                },
                {
                    label: "Description",
                    key: "description"
                },
                {
                    label: "Is Start",
                    key: "is_start"
                },
                {
                    label: "Country name",
                    key: "country_name"
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
                this.fetchData(this.config);
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteLocation(id);

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
