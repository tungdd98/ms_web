<template>
    <div>
        <div class="position-relative bg-gradient-success py-7">
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg
                    x="0"
                    y="0"
                    viewBox="0 0 2560 100"
                    preserveAspectRatio="none"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        class="fill-default"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>
        <div class="mt-n7 pb-5 container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div
                        class="bg-secondary shadow-sm position-relative mb-0 rounded py-3 px-5 px-lg-2"
                    >
                        <div class="bg-transparent pb-5">
                            <div class="text-muted text-center mt-2 mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="text-center">
                                <a href="#" class="btn btn-white">
                                    <div class="flex-center">
                                        <img
                                            src="images/icons/common/github.svg"
                                            width="20"
                                        />
                                        <span class="pl-1">Github</span>
                                    </div>
                                </a>
                                <a href="#" class="btn btn-white">
                                    <div class="flex-center">
                                        <img
                                            src="images/icons/common/google.svg"
                                            width="20"
                                        />
                                        <span class="pl-1">Google</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <validation-observer
                                v-slot="{ handleSubmit }"
                                ref="formValidator"
                            >
                                <form @submit.prevent="handleSubmit(onSubmit)">
                                    <base-input
                                        alternative
                                        class="mb-3"
                                        name="Email"
                                        :rules="{ required: true, email: true }"
                                        placeholder="Email"
                                        v-model="form.email"
                                    >
                                    </base-input>

                                    <base-input
                                        alternative
                                        class="mb-3"
                                        name="Password"
                                        type="password"
                                        placeholder="Password"
                                        v-model="form.password"
                                    >
                                    </base-input>
                                    <base-checkbox v-model="form.remember"
                                        >Remember me</base-checkbox
                                    >
                                    <div class="text-center my-4">
                                        <button
                                            class="btn btn-primary"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </validation-observer>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/dashboard" class="text-light"
                                ><small>Forgot password?</small></router-link
                            >
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/register" class="text-light"
                                ><small>Create new account</small></router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            form: {
                email: "",
                password: "password",
                remember: false
            }
        };
    },
    computed: {
        ...mapState({
            emailRegister: state => state.authenticate.emailRegister
        })
    },
    created() {
        this.form.email = this.emailRegister || "admin@gmail.com";
    },
    methods: {
        ...mapActions({
            login: "authenticate/login"
        }),
        async onSubmit() {
            const { email, password, remember } = this.form;
            const response = await this.login({
                email,
                password,
                remember: remember ? 1 : 0
            });

            if (response.success) {
                if (remember) {
                    this.$cookie.set("ms_web", response.token, {
                        expires: 7
                    });
                    this.$cookie.set(
                        "user_ms_web",
                        JSON.stringify(response.userInfo),
                        {
                            expires: 7
                        }
                    );
                } else {
                    this.$cookie.set("ms_web", response.token);
                    this.$cookie.set(
                        "user_ms_web",
                        JSON.stringify(response.userInfo)
                    );
                }
                return this.$router.push(this.$route.query.redirect || "/");
            }

            this.onReset();
        },
        onReset() {
            this.form = {
                email: "",
                password: "",
                remember: false
            };
        }
    }
};
</script>
