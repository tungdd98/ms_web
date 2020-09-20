import { apisAuth } from "@/utils/apis";

const state = {
    accessToken: null
};

const getters = {};

const mutations = {
    setAccessToken(state, data = null) {
        state.accessToken = data;
        if (!data) {
            this.$cookie.remove("ms_web");
        }
    }
};

const actions = {
    async login({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.auth.login, data);
            commit("setAccessToken", res.access_token);

            return {
                success: res
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
