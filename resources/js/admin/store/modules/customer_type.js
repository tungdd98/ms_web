import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getCustomerType({ commit }, params) {
        try {
            const res = await this.$axios.get(apis.auth.customerType.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addCustomerType({ commit }, data) {
        try {
            const res = await this.$axios.post(
                apis.auth.customerType.create,
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
    async deleteCustomerType({ commit }, id) {
        try {
            const res = await this.$axios.delete(
                apis.auth.customerType.delete.replace(/:id/, id)
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
    async updateCustomerType({ commit }, { id, data }) {
        try {
            const res = await this.$axios.post(
                apis.auth.customerType.update.replace(/:id/, id),
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
    async getAllCustomerType({ commit }) {
        try {
            const res = await this.$axios.get(apis.auth.customerType.getAll);

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
