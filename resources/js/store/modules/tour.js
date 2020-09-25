import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getTours({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.tours.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addTour({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.tours.create, data);

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
    async deleteTour({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apisAuth.tours.delete.replace(/:id/, id)
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
    async updateTour({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apisAuth.tours.update.replace(/:id/, id),
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
