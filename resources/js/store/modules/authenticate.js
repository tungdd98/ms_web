import { apisAuth } from "@/utils/apis";

const state = {
    accessToken: null,
    userInfo: null,
    emailRegister: null
};

const getters = {};

const mutations = {
    setAccessToken(state, data) {
        state.accessToken = data || null;
        if (!data) {
            this.$cookie.remove("ms_web");
        }
    },
    setUserInfo(state, data) {
        state.userInfo = data || null;
    },
    setEmailRegister(state, data) {
        state.emailRegister = data || null;
    }
};

const actions = {
    async login({ commit }, { email, password, remember }) {
        try {
            const res = await this.$axios.post(apisAuth.auth.login, {
                email,
                password,
                remember
            });
            commit("setAccessToken", res.access_token);
            commit("setUserInfo", res.user_info.original);

            return {
                success: true,
                token: res.access_token,
                userInfo: res.user_info.original
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async logout({ commit }) {
        try {
            await this.$axios.post(apisAuth.auth.logout);
            commit("setAccessToken", null);
            commit("setUserInfo", null);

            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async register({ commit }, { name, email, password }) {
        try {
            const res = await this.$axios.post(apisAuth.auth.register, {
                name,
                email,
                password
            });
            commit("setEmailRegister", email);

            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
