<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-7">
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
        <!-- Page content -->
        <b-container class="mt--8 pb-5">
            <b-row class="justify-content-center">
                <b-col lg="5" md="7">
                    <b-card no-body class="bg-secondary border-0 mb-0">
                        <b-card-header class="bg-transparent pb-5">
                            <div class="text-muted text-center mt-2 mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <a href="#" class="btn btn-neutral btn-icon">
                                    <span class="btn-inner--icon"
                                        ><img src="img/icons/common/github.svg"
                                    /></span>
                                    <span class="btn-inner--text">Github</span>
                                </a>
                                <a href="#" class="btn btn-neutral btn-icon">
                                    <span class="btn-inner--icon"
                                        ><img src="img/icons/common/google.svg"
                                    /></span>
                                    <span class="btn-inner--text">Google</span>
                                </a>
                            </div>
                        </b-card-header>
                        <b-card-body class="px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <validation-observer
                                v-slot="{ handleSubmit }"
                                ref="formValidator"
                            >
                                <b-form
                                    role="form"
                                    @submit.prevent="handleSubmit(onSubmit)"
                                >
                                    <base-input
                                        alternative
                                        class="mb-3"
                                        name="Email"
                                        :rules="{ required: true, email: true }"
                                        prepend-icon="ni ni-email-83"
                                        placeholder="Email"
                                        v-model="form.email"
                                    >
                                    </base-input>

                                    <base-input
                                        alternative
                                        class="mb-3"
                                        name="Password"
                                        :rules="{ required: true, min: 6 }"
                                        prepend-icon="ni ni-lock-circle-open"
                                        type="password"
                                        placeholder="Password"
                                        v-model="form.password"
                                    >
                                    </base-input>

                                    <b-form-checkbox v-model="form.rememberMe"
                                        >Remember me</b-form-checkbox
                                    >
                                    <div class="text-center">
                                        <base-button
                                            type="primary"
                                            native-type="submit"
                                            class="my-4"
                                            >Sign in</base-button
                                        >
                                    </div>
                                </b-form>
                            </validation-observer>
                        </b-card-body>
                    </b-card>
                    <b-row class="mt-3">
                        <b-col cols="6">
                            <router-link to="/dashboard" class="text-light"
                                ><small>Forgot password?</small></router-link
                            >
                        </b-col>
                        <b-col cols="6" class="text-right">
                            <router-link to="/register" class="text-light"
                                ><small>Create new account</small></router-link
                            >
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            form: {
                email: "tungdd98@gmail.com",
                password: "password",
                rememberMe: false
            }
        };
    },
    methods: {
        ...mapActions({
            login: "authenticate/login"
        }),
        async onSubmit() {
            const { email, password } = this.form;
            const data = await this.login({
                email,
                password
            });

            if (data.success) {
                if (this.rememberMe) {
                    this.$cookie.set("ms_web", data.success.access_token, {
                        expires: 30
                    });
                } else {
                    this.$cookie.set("ms_web", data.success.access_token);
                }
                return this.$router.push(this.$route.query.redirect || "/");
            }

            this.onReset();
        },
        onReset() {
            this.form = {
                email: "",
                password: "",
                rememberMe: false
            };
        }
    }
};
</script>
