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
            locations: null,
            currentItem: null,
            countries: null,
            pageCount: 0,
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
            loading: state => state.display.isLoadingTable
        })
    },
    async created() {
        await Promise.all([
            this.fetchData(this.$route.query),
            this.fetchCountries()
        ]);
    },
    async beforeRouteUpdate(to, from, next) {
        await this.fetchData(to.query);
        next();
    },
    methods: {
        ...mapActions({
            getLocations: "location/getLocations",
            addLocation: "location/addLocation",
            deleteLocation: "location/deleteLocation",
            updateLocation: "location/updateLocation",
            getAllCountry: "country/getAllCountry"
        }),
        async fetchData(query) {
            const data = await this.getLocations(query);

            if (data) {
                this.locations = data.locations || [];
                this.pageCount = data.last_page;
            }
        },
        async fetchCountries() {
            const data = await this.getAllCountry();

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
                await this.fetchData(this.$route.query);
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteLocation(id);

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
