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
            await this.$axios.post(apisAuth.timeTour.create, data);

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
    async deleteTimeTour({ commit }, id) {
        try {
            await this.$axios.delete(
                apisAuth.timeTour.delete.replace(/:id/, id)
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
    async updateTimeTour({ commit }, { id, data }) {
        try {
            await this.$axios.post(
                apisAuth.timeTour.update.replace(/:id/, id),
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
