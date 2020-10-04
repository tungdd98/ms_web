<template>
    <header class="shadow bg-white">
        <div class="container flex-center justify-content-between py-3">
            <span
                class="d-lg-none icon icon-menu cursor-pointer font-20"
                @click.stop="() => $emit('change')"
            ></span>
            <div class="ms-logo">
                <router-link to="/">
                    <img
                        src="images/assets/logo.png"
                        alt="logo"
                        class="img-fluid"
                    />
                </router-link>
            </div>
            <div
                class="flex-grow-1 d-none d-lg-flex flex-column align-items-center"
            >
                <div>
                    <button class="btn btn-sm btn-outline-info">
                        Du lich Chau Au
                    </button>
                    <button class="btn btn-sm btn-outline-info">
                        Tour han quoc
                    </button>
                    <button class="btn btn-sm btn-outline-info">
                        Tour cao cap
                    </button>
                    <button class="btn btn-sm btn-outline-info">
                        Tour khuyen mai
                    </button>
                </div>
                <div class="d-flex align-items-center pt-2">
                    <div class="mx-3 flex-center">
                        <i class="icon icon-phone-call mr-1 text-warning"></i>
                        <span>19004518</span>
                    </div>
                    <div class="mx-3 flex-center">
                        <i class="icon icon-mail mr-1 text-warning"></i>
                        <span>sales@hanoitourist.vn</span>
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-flex flex-column align-items-end">
                <div class="font-12 mb-1">
                    <a href="#" class="text-dark mx-2">Giới thiệu</a>
                    <a href="#" class="text-dark ml-2 mr-4">Liên hệ</a>
                    <a
                        href="#"
                        class="btn btn-warning btn-sm btn-icon rounded-pill"
                    >
                        <span class="btn-inner--icon">
                            <i class="icon icon-shopping-cart"></i>
                        </span>
                        <span class="btn-inner--text">Giỏ hàng</span>
                    </a>
                </div>
                <div>
                    <button class="btn btn-sm btn-outline-warning px-3">
                        Đăng ký
                    </button>
                    <button class="btn btn-sm btn-warning text-white px-3">
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {};
</script>
