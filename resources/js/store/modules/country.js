import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getCountries({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.countries.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addCountry({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.countries.create, data);

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
                apisAuth.countries.delete.replace(/:id/, id)
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
                apisAuth.countries.update.replace(/:id/, id),
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
