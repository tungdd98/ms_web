import apis from "@/admin/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getLocations({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.locations.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addLocation({ commit }, data) {
        try {
            const res = await this.$axios.post(apis.locations.create, data);

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
    async deleteLocation({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apis.locations.delete.replace(/:id/, id)
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
    async updateLocation({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apis.locations.update.replace(/:id/, id),
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
