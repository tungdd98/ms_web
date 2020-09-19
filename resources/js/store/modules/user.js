import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getUsers({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.users.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addUser({ commit }, data) {
        try {
            const res = await this.$axios.post(apis.users.post, data);

            return {
                success: res.data,
                message: res.statusText
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async deleteUser({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apis.users.delete.replace(/:id/, id)
            );

            return {
                success: res.data,
                message: res.statusText
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    },
    async updateUser({ commit }, { id, data }) {
        try {
            const res = await this.$axios.put(
                apis.users.put.replace(/:id/, id),
                data
            );

            return {
                success: res.data,
                message: res.statusText
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
