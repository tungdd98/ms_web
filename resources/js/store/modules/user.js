import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getUsers({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.users, {
                params
            });

            return res;
        } catch (error) {
            return error;
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
