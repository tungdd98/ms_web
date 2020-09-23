import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getUsers({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.users.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addUser({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.users.create, data);

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
    async deleteUser({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apisAuth.users.delete.replace(/:id/, id)
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
    async updateUser({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apisAuth.users.update.replace(/:id/, id),
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
