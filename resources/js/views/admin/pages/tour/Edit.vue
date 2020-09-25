<template>
    <div>
        <div class="d-flex justify-content-end p-2 align-items-center">
            <base-button type="outline-primary" @click="isVisible = true">
                Add new
            </base-button>
        </div>
        <modal
            :show.sync="isVisible"
            size="full"
            body-classes="p-0"
            hide-footer
        >
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
                            <div class="row">
                                <div class="col-8">
                                    <base-input
                                        alternative
                                        v-model="form.title"
                                        name="title"
                                        class="mb-3"
                                        placeholder="Enter title"
                                        rules="required"
                                        label="Title"
                                    >
                                    </base-input>
                                    <base-input
                                        alternative
                                        v-model.number="form.place"
                                        name="place"
                                        class="mb-3"
                                        placeholder="Enter place"
                                        rules="required"
                                        label="Place"
                                    >
                                    </base-input>
                                    <base-input label="Schedule">
                                        <textarea
                                            class="form-control"
                                            rows="3"
                                            v-model="form.schedule"
                                        ></textarea>
                                    </base-input>
                                    <base-input label="Description">
                                        <textarea
                                            class="form-control"
                                            rows="3"
                                            v-model="form.description"
                                        ></textarea>
                                    </base-input>
                                    <base-input label="Content">
                                        <textarea
                                            class="form-control"
                                            rows="5"
                                            v-model="form.content"
                                        ></textarea>
                                    </base-input>
                                </div>
                                <div class="col-4">
                                    <base-upload-avatar
                                        label="Thumbnail"
                                        @onUpload="onUpload"
                                        :image="image"
                                    ></base-upload-avatar>
                                    <base-input
                                        label="Departure"
                                        rules="required"
                                        name="departure"
                                    >
                                        <select
                                            class="form-control"
                                            v-model="form.departure_location_id"
                                        >
                                            <option value=""
                                                >-- Select --</option
                                            >
                                            <option
                                                :value="location.id"
                                                v-for="location in departureLocations"
                                                :key="location.id"
                                                >{{ location.title }}</option
                                            >
                                        </select>
                                    </base-input>
                                    <base-input
                                        label="Destination"
                                        rules="required"
                                        name="destination"
                                    >
                                        <select
                                            class="form-control"
                                            v-model="
                                                form.destination_location_id
                                            "
                                        >
                                            <option value=""
                                                >-- Select --</option
                                            >
                                            <option
                                                :value="location.id"
                                                v-for="location in destinationLocations"
                                                :key="location.id"
                                                >{{ location.title }}</option
                                            >
                                        </select>
                                    </base-input>
                                    <base-input
                                        label="Time tour"
                                        rules="required"
                                        name="time tour"
                                    >
                                        <select
                                            class="form-control"
                                            v-model="form.time_id"
                                        >
                                            <option value=""
                                                >-- Select --</option
                                            >
                                            <option
                                                :value="item.id"
                                                v-for="item in timesTour"
                                                :key="item.id"
                                                >{{ item.title }}</option
                                            >
                                        </select>
                                    </base-input>
                                    <base-input
                                        label="Vehicle tour"
                                        rules="required"
                                        name="vehicle tour"
                                    >
                                        <select
                                            class="form-control"
                                            v-model="form.vehicle_id"
                                        >
                                            <option value=""
                                                >-- Select --</option
                                            >
                                            <option
                                                :value="item.id"
                                                v-for="item in vehicleTour"
                                                :key="item.id"
                                                >{{ item.title }}</option
                                            >
                                        </select>
                                    </base-input>
                                </div>
                            </div>

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
        locations: { type: Array, default: [] },
        timesTour: { type: Array, default: [] },
        vehicleTour: { type: Array, default: [] }
    },
    data() {
        return {
            title: "Add new tour",
            isVisible: false,
            form: {
                title: "",
                description: "",
                content: "",
                thumbnail: "",
                departure_location_id: "",
                destination_location_id: "",
                time_id: "",
                vehicle_id: "",
                place: "",
                schedule: "",
                albums: ""
            },
            image: ""
        };
    },
    computed: {
        departureLocations() {
            return this.locations.filter(location => location.is_start === 1);
        },
        destinationLocations() {
            return this.locations.filter(location => location.is_start !== 1);
        }
    },
    watch: {
        item(val) {
            if (val) {
                this.isVisible = true;
                const {
                    title,
                    description,
                    content,
                    thumbnail,
                    departure_location_id,
                    destination_location_id,
                    time_id,
                    vehicle_id,
                    place,
                    schedule,
                    albums
                } = val;
                this.form = {
                    title,
                    description: description || "",
                    content: content || "",
                    thumbnail: thumbnail || "",
                    departure_location_id: departure_location_id || "",
                    destination_location_id: destination_location_id || "",
                    time_id: time_id || "",
                    vehicle_id: vehicle_id || "",
                    place,
                    schedule: schedule || "",
                    albums: albums || ""
                };
                this.image = thumbnail
                    ? `images/upload/tours/${thumbnail}`
                    : "";
                this.title = "Update tour";
            } else {
                this.onReset();
                this.title = "Add new tour";
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
        onUpload(file) {
            this.form.thumbnail = file[0].raw;
        },
        onReset() {
            this.form = {
                title: "",
                description: "",
                content: "",
                thumbnail: "",
                departure_location_id: "",
                destination_location_id: "",
                time_id: "",
                vehicle_id: "",
                place: "",
                schedule: "",
                albums: ""
            };
            this.image = "";
            this.isVisible = false;
        }
    }
};
</script>
