<template>
    <div>
        <!-- Begin: Carousel -->
        <base-slider :items="slides" key-item="id" class="ms-slide">
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
                    key-item="id"
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
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        const slides = [
            {
                id: 1,
                src:
                    "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                id: 2,
                src:
                    "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                id: 3,
                src:
                    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                id: 4,
                src:
                    "https://images.pexels.com/photos/1432066/pexels-photo-1432066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
        ];
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
        return {
            slides,
            servies
        };
    }
};
</script>
