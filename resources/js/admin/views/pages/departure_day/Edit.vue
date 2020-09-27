<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <button class="btn btn-outline-primary" @click="isVisible = true">
                Add new
            </button>
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
                                alternative
                                v-model="form.start_day"
                                name="start day"
                                class="mb-3"
                                rules="required"
                                label="Start day"
                                type="date"
                            >
                            </base-input>
                            <base-input
                                alternative
                                v-model="form.start_time"
                                name="start time"
                                class="mb-3"
                                rules="required"
                                label="Start time"
                                type="time"
                            >
                            </base-input>
                            <div class="d-flex justify-content-end my-2">
                                <button class="btn btn-white" @click="onReset">
                                    Close
                                </button>
                                <button class="btn btn-primary" type="submit">
                                    Save
                                </button>
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
        tours: { type: Array, default: [] }
    },
    data() {
        return {
            title: "Add new departure day",
            isVisible: false,
            form: {
                start_day: "",
                start_time: "",
                tour_id: ""
            }
        };
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const { start_day, start_time } = val;
                this.form = {
                    start_day,
                    start_time,
                    tour_id
                };
                this.title = "Update departure day";
            } else {
                this.onReset();
                this.title = "Add new departure day";
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
                start_day: "",
                start_time: "",
                tour_id: ""
            };
            this.isVisible = false;
        }
    }
};
</script>
