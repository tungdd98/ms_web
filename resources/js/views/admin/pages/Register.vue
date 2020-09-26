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
                        class="bg-secondary shadow-sm position-relative mb-0 rounded py-3"
                    >
                        <div class="bg-transparent pb-5">
                            <div class="text-muted text-center mt-2 mb-4">
                                <small>Sign up with</small>
                            </div>
                            <div class="text-center">
                                <a
                                    href="#"
                                    class="btn btn-neutral btn-icon mr-4"
                                >
                                    <span class="btn-inner--icon"
                                        ><img
                                            src="images/icons/common/github.svg"
                                    /></span>
                                    <span class="btn-inner--text">Github</span>
                                </a>
                                <a href="#" class="btn btn-neutral btn-icon">
                                    <span class="btn-inner--icon"
                                        ><img
                                            src="images/icons/common/google.svg"
                                    /></span>
                                    <span class="btn-inner--text">Google</span>
                                </a>
                            </div>
                        </div>
                        <div class="px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
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
                                        placeholder="Name"
                                        name="Name"
                                        :rules="{ required: true }"
                                        v-model="form.name"
                                    >
                                    </base-input>

                                    <base-input
                                        alternative
                                        class="mb-3"
                                        placeholder="Email"
                                        name="Email"
                                        :rules="{ required: true, email: true }"
                                        v-model="form.email"
                                    >
                                    </base-input>

                                    <base-input
                                        alternative
                                        class="mb-3"
                                        placeholder="Password"
                                        type="password"
                                        name="Password"
                                        :rules="{ required: true, min: 6 }"
                                        v-model="form.password"
                                    >
                                    </base-input>
                                    <div class="text-center mt-4">
                                        <button
                                            class="btn btn-primary"
                                            type="submit"
                                        >
                                            Create account
                                        </button>
                                    </div>
                                </b-form>
                            </validation-observer>
                        </div>
                    </div>
                    <div class="text-muted text-center mt-2 mb-4">
                        <small
                            >If you have a account,
                            <router-link to="/login"
                                >sign in</router-link
                            ></small
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "register",
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        ...mapActions({
            register: "authenticate/register"
        }),
        async onSubmit() {
            const response = await this.register(this.form);
            if (response.success) {
                await this.notify("Register successful", "success", 1000);
                this.$router.push("/login");
            }
            this.onReset();
        },
        onReset() {
            this.form = {
                name: "",
                email: "",
                password: ""
            };
        }
    }
};
</script>
