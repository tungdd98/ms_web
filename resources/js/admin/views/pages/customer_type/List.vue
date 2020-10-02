<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Customer Type</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="customerType"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
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
            customerType: null,
            currentItem: null,
            pageCount: 0,
            fields: [
                {
                    label: "Title",
                    key: "title"
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
        await this.fetchData(this.$route.query);
    },
    async beforeRouteUpdate(to, from, next) {
        await this.fetchData(to.query);
        next();
    },
    methods: {
        ...mapActions({
            getCustomerType: "customerType/getCustomerType",
            addCustomerType: "customerType/addCustomerType",
            deleteCustomerType: "customerType/deleteCustomerType",
            updateCustomerType: "customerType/updateCustomerType"
        }),
        async fetchData(query) {
            const data = await this.getCustomerType(query);

            if (data) {
                this.customerType = data.customer_type || [];
                this.pageCount = data.last_page;
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addCustomerType(formData)
                : await this.updateCustomerType({
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
                const res = await this.deleteCustomerType(id);

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
