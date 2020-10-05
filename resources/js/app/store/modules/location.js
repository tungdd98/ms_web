import apis from "@/utils/apis";
const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getLocations({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.locations, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async getAllCountryNav({ commit }) {
        try {
            const res = await this.$axios.get(apis.allCountryNav);

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
