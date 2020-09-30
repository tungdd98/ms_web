<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Price Tour</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :tours="tours"
                    :customer-type="customerType"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="priceTour"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
                    <template v-slot:original_price="{ row }">
                        <span>{{ row.original_price | formatMoney }}</span>
                    </template>
                    <template v-slot:price="{ row }">
                        <span class="font-weight-bold">{{
                            row.price | formatMoney
                        }}</span>
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
            priceTour: null,
            tours: null,
            customerType: null,
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
                    label: "Customer name",
                    key: "customer_name"
                },
                {
                    label: "Original price",
                    key: "original_price"
                },
                {
                    label: "Price",
                    key: "price"
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
        await Promise.all([
            this.fetchData(this.config),
            this.fetchTours(),
            this.fetchCustomerType()
        ]);
    },
    methods: {
        ...mapActions({
            getPriceTour: "priceTour/getPriceTour",
            addPriceTour: "priceTour/addPriceTour",
            deletePriceTour: "priceTour/deletePriceTour",
            updatePriceTour: "priceTour/updatePriceTour",
            getTours: "tour/getTours",
            getCustomerType: "customerType/getCustomerType"
        }),
        async fetchData(query) {
            const data = await this.getPriceTour(query);

            if (data) {
                this.priceTour = data.price_tour || [];
                this.totalRecord = data.total;
            }
        },
        async fetchTours() {
            const data = await this.getTours();

            if (data) {
                this.tours = data.tours || [];
            }
        },
        async fetchCustomerType() {
            const data = await this.getCustomerType();

            if (data) {
                this.customerType = data.customer_type || [];
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addPriceTour(formData)
                : await this.updatePriceTour({
                      tour_id: this.currentItem.tour_id,
                      customer_type_id: this.currentItem.customer_type_id,
                      data: formData
                  });

            if (res.success) {
                this.notify(res.message);
                this.fetchData(this.config);
            }
        },
        async onDelete(item) {
            const result = await this.confirm();
            const { tour_id, customer_type_id } = item;

            if (result.value) {
                const res = await this.deletePriceTour({
                    tour_id,
                    customer_type_id
                });

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
