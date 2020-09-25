<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <base-button type="outline-primary" @click="isVisible = true">
                Add new
            </base-button>
        </div>
        <modal :show.sync="isVisible" size="xl" body-classes="p-0" hide-footer>
            <h2 slot="header" class="modal-title">{{ title }}</h2>
            <div class="p-4">
                <template>
                    <validation-observer
                        ref="observer"
                        v-slot="{ handleSubmit }"
                    >
                        <b-form
                            role="form"
                            ref="form"
                            @submit.stop.prevent="handleSubmit(onSubmit)"
                        >
                            <base-input
                                label="Tour"
                                name="tour"
                                rules="required"
                            >
                                <select
                                    class="form-control"
                                    v-model="form.tour_id"
                                >
                                    <option value="">-- Select --</option>
                                    <option
                                        :value="tour.id"
                                        v-for="tour in tours"
                                        :key="tour.id"
                                        >{{ tour.title }}</option
                                    >
                                </select>
                            </base-input>
                            <base-input
                                label="Customer type"
                                name="customer type"
                                rules="required"
                            >
                                <select
                                    class="form-control"
                                    v-model="form.customer_type_id"
                                >
                                    <option value="">-- Select --</option>
                                    <option
                                        :value="customer.id"
                                        v-for="customer in customerType"
                                        :key="customer.id"
                                        >{{ customer.title }}</option
                                    >
                                </select>
                            </base-input>
                            <base-input
                                alternative
                                v-model.number="form.original_price"
                                name="original price"
                                class="mb-3"
                                placeholder="Enter original price"
                                label="Original price"
                            >
                            </base-input>
                            <base-input
                                alternative
                                v-model.number="form.price"
                                name="price"
                                class="mb-3"
                                placeholder="Enter price"
                                rules="required"
                                label="Price"
                            >
                            </base-input>
                            <div class="d-flex justify-content-end my-2">
                                <base-button type="white" @click="onReset"
                                    >Close
                                </base-button>
                                <base-button
                                    type="primary"
                                    native-type="submit"
                                >
                                    Save
                                </base-button>
                            </div>
                        </b-form>
                    </validation-observer>
                </template>
            </div>
        </modal>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        item: { type: Object },
        tours: { type: Array, default: [] },
        customerType: { type: Array, default: [] }
    },
    data() {
        return {
            title: "Add new price tour",
            isVisible: false,
            form: {
                original_price: 0,
                price: 0,
                tour_id: "",
                customer_type_id: ""
            }
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const {
                    original_price,
                    price,
                    tour_id,
                    customer_type_id
                } = val;
                this.form = {
                    original_price,
                    price,
                    tour_id,
                    customer_type_id
                };
                this.title = "Update price tour";
            } else {
                this.onReset();
                this.title = "Add new price tour";
            }
        },
        isVisible(val) {
            if (!val) {
                this.$emit("change", null);
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit("onSubmit", this.form);
            this.onReset();
        },
        onReset() {
            this.form = {
                original_price: 0,
                price: 0,
                tour_id: "",
                customer_type_id: ""
            };
            this.isVisible = false;
        }
    }
};
</script>
