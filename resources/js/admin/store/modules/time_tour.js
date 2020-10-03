import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getTimesTour({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.auth.timeTour.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addTimeTour({ commit }, data) {
        try {
            const res = await this.$axios.post(apis.auth.timeTour.create, data);

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
                apis.auth.timeTour.delete.replace(/:id/, id)
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
                apis.auth.timeTour.update.replace(/:id/, id),
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
