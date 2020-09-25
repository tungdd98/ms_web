<template>
    <div>
        <div class="container-fluid mt--7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Price Tour</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    :tours="tours"
                    :customer-type="customerType"
                    @change="setCurrentItem"
                ></edit>
                <el-table
                    class="table-responsive table w-100"
                    header-row-class-name="thead-light"
                    :data="priceTour"
                    v-loading="loading"
                    element-loading-text="Loading..."
                    element-loading-spinner="icon icon-settings circular"
                >
                    <el-table-column label="Tour name" prop="tour_name">
                    </el-table-column>
                    <el-table-column label="Customer name" prop="customer_name">
                    </el-table-column>
                    <el-table-column
                        label="Original price"
                        prop="original_price"
                    >
                        <template v-slot="{ row }">
                            <span>{{ row.original_price | formatMoney }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Price" prop="price">
                        <template v-slot="{ row }">
                            <span class="font-weight-600">{{
                                row.price | formatMoney
                            }}</span>
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
                                    @click="onDelete(row)"
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
            priceTour: null,
            tours: [],
            customerType: [],
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
                this.fetchData();
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
