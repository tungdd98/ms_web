<template>
    <div>
        <!-- Begin: Carousel -->
        <base-slider :items="slides" class="ms-slide">
            <template v-slot="{ item }">
                <base-background
                    :src="item.src"
                    class="ms-slide-item"
                ></base-background>
            </template>
            <template slot="content">
                <!-- Begin: Search -->
                <div class="ms-search w-100 my-4">
                    <div class="container">
                        <div class="bg-white p-3 rounded shadow">
                            <div class="ms-title mb-2">
                                Tìm kiếm tour
                            </div>
                            <div class="d-flex flex-column flex-lg-row">
                                <div class="order-1 flex-center mt-3">
                                    <div class="form-check mr-4">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios1"
                                            value="option1"
                                            checked
                                        />
                                        <label
                                            class="form-check-label text-capitalize"
                                            for="exampleRadios1"
                                        >
                                            Tour trong nước
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios1"
                                            value="option1"
                                            checked
                                        />
                                        <label
                                            class="form-check-label text-capitalize"
                                            for="exampleRadios1"
                                        >
                                            tour nước ngoài
                                        </label>
                                    </div>
                                </div>
                                <div
                                    class="ml-auto overflow-hidden rounded d-flex border align-items-center px-2 order-lg-2"
                                >
                                    <input
                                        type="text"
                                        class="form-control border-0"
                                        placeholder="Tìm nhanh..."
                                    />
                                    <i class="icon icon-search"></i>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div
                                    class="row flex-column flex-lg-row no-gutters"
                                >
                                    <div class="form-group col">
                                        <select class="form-control rounded-0">
                                            <option>Điểm xuất phát</option>
                                        </select>
                                    </div>
                                    <div class="form-group col">
                                        <select class="form-control rounded-0">
                                            <option>Bạn muốn đi đâu?</option>
                                        </select>
                                    </div>
                                    <div class="form-group col">
                                        <select class="form-control rounded-0">
                                            <option>Lịch trình</option>
                                        </select>
                                    </div>
                                    <div class="form-group col">
                                        <input
                                            type="text"
                                            id="datepicker"
                                            class="form-control rounded-0"
                                            placeholder="Ngày khởi hành"
                                        />
                                    </div>
                                    <div class="form-group col">
                                        <select class="form-control rounded-0">
                                            <option>Khoảng giá</option>
                                        </select>
                                    </div>
                                    <div class="form-group col">
                                        <button
                                            class="btn btn-warning text-white w-100 el-weight-bold text-uppercase rounded-0"
                                        >
                                            <i class="fas fa-search"></i>
                                            <span>Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Search -->
            </template>
        </base-slider>
        <!-- Begin: Dịch vụ -->
        <div class="text-center pb-5 bg-lighter">
            <div class="container">
                <h4 class="text-uppercase font-20 my-5">
                    dịch vụ của chúng tôi
                </h4>
                <base-slider
                    :items="servies"
                    :per-page-custom="[
                        [576, 2],
                        [992, 4]
                    ]"
                >
                    <template v-slot="{ item }">
                        <div
                            class="border py-3 px-5 px-lg-3 bg-white h-100 flex-center flex-column mx-1"
                        >
                            <img :src="item.src" alt="" height="40" />
                            <div class="font-weight-bold py-2 font-16">
                                {{ item.title }}
                            </div>
                            <p class="flex-grow-1">
                                {{ item.desc }}
                            </p>
                            <a href="#" class="font-italic">Xem thêm</a>
                        </div>
                    </template>
                </base-slider>
            </div>
        </div>
        <!-- Begin: Hot tour -->
        <div class="mb-5">
            <tabs
                class-header="container"
                title="Hot tour"
                type="outline-primary"
                class-content="container-fluid"
            >
                <tab title="Tour khuyến mãi">
                    <template v-if="toursHotSale && toursHotSale.length">
                        <base-slider
                            :items="toursHotSale"
                            key-item="id"
                            :per-page-custom="[
                                [576, 2],
                                [992, 3],
                                [1400, 5]
                            ]"
                        >
                            <template v-slot="{ item }">
                                <product :item="item"></product>
                            </template>
                        </base-slider>
                    </template>
                    <div v-else class="text-center py-3">Không có dữ liệu.</div>
                    <template v-slot:footer>
                        <div class="text-center mt-4">
                            <a href="#" class="btn btn-outline-primary"
                                >Xem thêm</a
                            >
                        </div>
                    </template>
                </tab>
                <tab title="Tour giờ chót">Đang cập nhật...</tab>
            </tabs>
        </div>
        <!-- Begin: Tour trong nước -->
        <div class="mb-5">
            <div class="container">
                <h4 class="ms-title font-20">
                    tour trong nước
                </h4>
                <p class="ms-subtitle mt-2 mb-4">điểm đến nổi bật</p>
                <p>
                    Để không ngừng đáp ứng nhu cầu tham quan, nghỉ dưỡng, khảo
                    sát, tham dự hội chợ, triển lãm, hội thảo, giao lưu và hợp
                    tác ngày càng cao của Quý khách, với phương châm “Tất cả vì
                    sự hài lòng của khách hàng”, chúng tôi xin trân trọng giới
                    thiệu tới Quý khách các chương trình “Việt Nam - Đất nước
                    muôn màu”. Hy vọng rằng, đây sẽ là những thông tin bổ ích và
                    thiết thực về các sản phẩm du lịch tiêu biểu và hấp dẫn đến
                    hấu hết các địa danh du lịch nổi tiếng của dải đất hình chữ
                    S tươi đẹp mà công ty chúng tôi đã và đang thực hiện rất
                    thành công...
                </p>
            </div>
            <div class="container-fluid">
                <base-slider
                    :items="locations"
                    :per-page-custom="[
                        [768, 4],
                        [1200, 8]
                    ]"
                >
                    <template v-slot="{ item }">
                        <div class="px-1 overflow-hidden position-relative">
                            <img
                                :src="item.thumbnail"
                                class="img-fluid rounded"
                            />
                            <div class="absolute-center">
                                <span
                                    class="text-white font-weight-bold text-uppercase text-shadow"
                                    >{{ item.title }}</span
                                >
                            </div>
                        </div>
                    </template>
                </base-slider>
                <div class="text-center mt-4">
                    <a href="#">Xem tất cả các điểm</a>
                </div>
            </div>
        </div>
        <!-- Begin: Tour trong nước  -->
        <div class="mb-5">
            <tabs
                class-header="container"
                title="Tour nổi bật"
                type="outline-primary"
                type-title="ms-subtitle"
                class-content="container-fluid"
            >
                <tab title="Tour khuyến mãi">
                    <template v-if="toursNationSale && toursNationSale.length">
                        <base-slider
                            :items="toursNationSale"
                            key-item="id"
                            :per-page-custom="[
                                [576, 2],
                                [992, 3],
                                [1400, 5]
                            ]"
                        >
                            <template v-slot="{ item }">
                                <product :item="item"></product>
                            </template>
                        </base-slider>
                    </template>
                    <div v-else class="text-center py-3">Không có dữ liệu.</div>
                    <template v-slot:footer>
                        <div class="text-center mt-4">
                            <a href="#" class="btn btn-outline-primary"
                                >Xem thêm</a
                            >
                        </div>
                    </template>
                </tab>
                <tab title="Tour giờ chót">Đang cập nhật...</tab>
            </tabs>
        </div>
    </div>
</template>

<script>
import Product from "@/app/components/product/Product";
import { mapActions } from "vuex";
export default {
    components: {
        Product
    },
    data() {
        const random = () => {
            return Math.round(Math.random() * 10000 + 1);
        };
        const slides = Array(5)
            .fill(null)
            .map(item => ({
                id: random(),
                src:
                    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }));
        const servies = [
            {
                id: 1,
                src: "images/assets/icon6.png",
                title: "DU LỊCH M.I.C.E",
                desc: `MICE - du lịch nghỉ dưỡng kết hợp hội nghị hội thảo cùng Hanoitourist - đơn vị tiên phong trong việc tổ chức du lịch MICE chuyên nghiệp với đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm`
            },
            {
                id: 2,
                src: "images/assets/icon7.png",
                title: "THUÊ XE",
                desc: `Hanoitourist cung cấp và mang đến cho quý khách dịch vụ cho thuê xe du lịch, xe dịch vụ với giá cực tốt, xe đời mới 16 chỗ; 29 chỗ; 35 chỗ; 45 chỗ … liên hệ để có bảng giá xe du lịch mà Hanoitourist đang cung cấp:`
            },
            {
                id: 3,
                src: "images/assets/icon8.png",
                title: "VÉ MÁY BAY",
                desc: `Liên hệ ngay phòng vé máy bay Hanoitourist và đặt ngay các vé máy bay giá rẻ trực tuyến đơn giản, an toàn, tiết kiệm ngay tại Website Hanoitourist`
            },
            {
                id: 4,
                src: "images/assets/icon11.png",
                title: "DU THUYỀN",
                desc: `Trải nghiệm du lịch đường thủy với các du thuyền nghỉ dưỡng đầy mê hoặc. Truy cập ngay và lựa chọn hành trình phù hợp cho gia đình bạn.`
            }
        ];
        const tours = Array(10)
            .fill(null)
            .map(item => ({
                id: random(),
                title: "Đêm thiêng liêng, sáng ngời tinh thần việt",
                thumbnail:
                    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                place: random(),
                time_name: "4N3Đ",
                vehicle_name: "Tự túc",
                price: 150000,
                departure_days: [
                    {
                        id: random(),
                        start_day: "21/8"
                    },
                    {
                        id: random(),
                        start_day: "23/8"
                    }
                ]
            }));
        const locations = Array(8)
            .fill(null)
            .map(item => ({
                id: random(),
                thumbnail:
                    "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                title: "hà nội"
            }));
        return {
            slides,
            servies,
            tours,
            locations,
            toursHotSale: null,
            toursNationSale: null
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        ...mapActions({
            getToursHomePage: "tour/getToursHomePage"
        }),
        async fetchData() {
            const [resToursHotSale, resToursNationSale] = await Promise.all([
                this.getToursHomePage({ sale: 1 }),
                this.getToursHomePage({
                    sale: 1,
                    type: 0
                })
            ]);

            this.toursHotSale = resToursHotSale.tours || [];
            this.toursNationSale = resToursNationSale.tours || [];
        }
    }
};
</script>
