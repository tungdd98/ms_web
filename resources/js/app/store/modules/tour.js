import apis from "@/app/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getToursHomePage({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.tourHotHomePage, {
                params
            });

            return res.data;
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
