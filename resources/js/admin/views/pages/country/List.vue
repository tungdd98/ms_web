<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Country</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="countries"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:avatar="{ row }">
                        <span>
                            {{
                                row.is_nation === 0
                                    ? "Trong nước"
                                    : "Ngoài nước"
                            }}
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
            countries: null,
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            },
            fields: [
                {
                    label: "Country",
                    key: "title"
                },
                {
                    label: "Place",
                    key: "is_nation"
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
                this.fetchData(this.config);
            }
        },
        async onDelete(id) {
            const result = await this.confirm();

            if (result.value) {
                const res = await this.deleteCountry(id);

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
