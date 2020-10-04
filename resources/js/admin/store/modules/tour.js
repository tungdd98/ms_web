import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getTours({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.auth.tours.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addTour({ commit }, data) {
        try {
            const res = await this.$axios.post(apis.auth.tours.create, data);

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
                apis.auth.tours.delete.replace(/:id/, id)
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
                apis.auth.tours.update.replace(/:id/, id),
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
    async getAllTour({ commit }) {
        try {
            const res = await this.$axios.get(apis.auth.tours.getAll);

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
