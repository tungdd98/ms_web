import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getVehicleTour({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.auth.vehicleTour.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addVehicleTour({ commit }, data) {
        try {
            const res = await this.$axios.post(
                apis.auth.vehicleTour.create,
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
    async deleteVehicleTour({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apis.auth.vehicleTour.delete.replace(/:id/, id)
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
    async updateVehicleTour({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apis.auth.vehicleTour.update.replace(/:id/, id),
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
    async getAllVehicleTour({ commit }) {
        try {
            const res = await this.$axios.get(apis.auth.vehicleTour.getAll);

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
