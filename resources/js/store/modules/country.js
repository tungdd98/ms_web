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
            await this.$axios.post(apisAuth.countries.create, data);

            return {
                success: true,
                message: "Add successful"
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
            await this.$axios.delete(
                apisAuth.countries.delete.replace(/:id/, id)
            );

            return {
                success: true,
                message: "Delete successful"
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
            await this.$axios.post(
                apisAuth.countries.update.replace(/:id/, id),
                data
            );

            return {
                success: true,
                message: "Update successful"
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
