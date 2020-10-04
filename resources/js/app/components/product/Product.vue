<template>
    <div class="p-1">
        <div class="ms-tour border rounded">
            <div class="ms-tour__image">
                <img v-lazy="`images/upload/tours/${item.thumbnail}`" />
                <div class="ms-tour__content">
                    <div
                        class="d-flex px-3 pb-2 w-100 justify-content-between text-white position-absolute"
                        style="bottom: 10px;"
                    >
                        <div class="flex-center">
                            <span class="icon icon-clock mr-1"></span>
                            <span class="text-uppercase text-truncate">{{
                                item.time_name
                            }}</span>
                        </div>
                        <div class="flex-center">
                            <span class="icon icon-users mr-1"></span>
                            <span>{{ item.place }} chỗ</span>
                        </div>
                    </div>
                </div>
                <div class="ms-tour__sale" v-if="hasSale">
                    <span class="font-12">SALE</span>
                    <span class="font-16">{{ sale }}%</span>
                </div>
            </div>
            <div class="p-3">
                <a href="#" class="text-uppercase text-dark font-weight-bold">
                    {{ item.title }}
                </a>
                <div
                    class="d-flex justify-content-between align-items-center py-2"
                >
                    <div class="font-13">
                        <div class="mb-1 d-flex align-items-center">
                            <i class="icon icon-truck mr-1 text-primary"></i>
                            <span>{{ item.vehicle_name }}</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="icon icon-calendar mr-1 text-primary"></i>
                            <span>{{ timeList }}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div>Giá từ</div>
                        <div class="font-weight-bold text-danger">
                            {{ minPrice | formatMoney }}
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button
                        class="btn btn-sm font-weight-bold text-capitalize btn-warning mt-2 px-3"
                    >
                        Giữ chỗ
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: {
        item: { type: Object, default: null }
    },
    computed: {
        timeList() {
            const { departure_day } = this.item;
            let str = "";
            if (departure_day) {
                const length = departure_day.length;
                if (length === 1) {
                    return this.formatDate(departure_day[0].start_day);
                } else if (length > 1) {
                    for (let i = 0; i < length - 1; i++) {
                        const day = departure_day[i];
                        str += `${this.formatDate(day.start_day)} - `;
                    }
                    str += this.formatDate(departure_day[length - 1].start_day);
                }
            }

            return str;
        },
        hasSale() {
            const { price_tour } = this.item;
            if (price_tour) {
                return price_tour.some(
                    item => item.price < item.original_price
                );
            }

            return false;
        },
        minPrice() {
            const { price_tour } = this.item;

            return this.findMinPrice(price_tour);
        },
        sale() {
            const {
                item: { price_tour },
                hasSale
            } = this;

            if (price_tour && hasSale) {
                const priceTruthy = price_tour.filter(
                    item => item.price < item.original_price
                );
                const minPrice = this.findMinPrice(priceTruthy);
                const priceMin = priceTruthy.find(
                    item => item.price === minPrice
                );

                return (
                    ((priceMin.original_price - priceMin.price) /
                        priceMin.original_price) *
                    100
                ).toFixed(1);
            }

            return 0;
        }
    },
    methods: {
        findMinPrice(data, key = "price") {
            if (data) {
                const arrPrices = data.map(item => item[key]);

                return Math.min(...arrPrices);
            }

            return 0;
        },
        formatDate(value, format = "DD/MM") {
            return typeof value !== "string"
                ? value
                : moment(value).format(format);
        }
    }
};
</script>
