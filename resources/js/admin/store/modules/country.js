import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getCountries({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.auth.countries.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addCountry({ commit }, data) {
        try {
            const res = await this.$axios.post(
                apis.auth.countries.create,
                data
            );

            return {
                success: res.data,
                message: res.message
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async deleteCountry({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apis.auth.countries.delete.replace(/:id/, id)
            );

            return {
                success: true,
                message: res.message
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async updateCountry({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apis.auth.countries.update.replace(/:id/, id),
                data
            );

            return {
                success: res.data,
                message: res.message
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async getAllCountry({ commit }) {
        try {
            const res = await this.$axios.get(apis.auth.countries.all);

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
