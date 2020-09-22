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
            await this.$axios.post(apisAuth.users.create, data);

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
    async deleteUser({ commit }, id) {
        try {
            await this.$axios.delete(apisAuth.users.delete.replace(/:id/, id));

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
    async updateUser({ commit }, { id, data }) {
        try {
            await this.$axios.post(
                apisAuth.users.update.replace(/:id/, id),
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
