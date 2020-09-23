import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getTimesTour({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.timeTour.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addTimeTour({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.timeTour.create, data);

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
    async deleteTimeTour({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apisAuth.timeTour.delete.replace(/:id/, id)
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
    async updateTimeTour({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apisAuth.timeTour.update.replace(/:id/, id),
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
