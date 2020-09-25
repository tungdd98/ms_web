import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getDepartureDay({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.departureDay.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addDepartureDay({ commit }, data) {
        try {
            const res = await this.$axios.post(
                apisAuth.departureDay.create,
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
    async deleteDepartureDay({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apisAuth.departureDay.delete.replace(/:id/, id)
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
    async updateDepartureDay({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apisAuth.departureDay.update.replace(/:id/, id),
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
