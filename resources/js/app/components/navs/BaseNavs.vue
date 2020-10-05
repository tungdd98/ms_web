<template>
    <nav>
        <div class="container">
            <ul :class="['ms-nav', { active: value }]">
                <li class="flex-center mb-4 d-lg-none">
                    <button class="btn btn-sm btn-outline-warning px-3">
                        Đăng ký
                    </button>
                    <button class="btn btn-sm btn-warning text-white px-3">
                        Đăng nhập
                    </button>
                </li>
                <slot name="links"> </slot>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "base-navs",
    props: {
        value: {
            type: Boolean
        }
    }
};
</script>
