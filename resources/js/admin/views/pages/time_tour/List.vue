<template>
    <div>
        <div class="container-fluid mt-n7">
            <div class="bg-white position-relative p-3 shadow rounded">
                <h3 class="mb-0">List Time tour</h3>
                <edit
                    @onSubmit="onSubmit"
                    :item="currentItem"
                    @change="setCurrentItem"
                ></edit>
                <base-table
                    :items="timesTour"
                    :fields="fields"
                    @delete="onDelete"
                    @show="setCurrentItem"
                >
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
            timesTour: null,
            currentItem: null,
            totalRecord: 0,
            config: {
                page: 1
            },
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
            loading: state => state.display.isLoadingTable,
            userInfo: state => state.authenticate.userInfo
        })
    },
    async created() {
        await this.fetchData(this.config);
    },
    methods: {
        ...mapActions({
            getTimesTour: "timeTour/getTimesTour",
            addTimeTour: "timeTour/addTimeTour",
            deleteTimeTour: "timeTour/deleteTimeTour",
            updateTimeTour: "timeTour/updateTimeTour"
        }),
        async fetchData(query) {
            const data = await this.getTimesTour(query);

            if (data) {
                this.timesTour = data.time_tour || [];
                this.totalRecord = data.total;
            }
        },
        async onSubmit(data) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = !this.currentItem
                ? await this.addTimeTour(formData)
                : await this.updateTimeTour({
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
                const res = await this.deleteTimeTour(id);

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
