import { apisAuth } from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getPriceTour({ commit }, params) {
        try {
            const res = await this.$axios.get(apisAuth.priceTour.get, {
                params
            });

            return res.data;
        } catch (error) {
            return error;
        }
    },
    async addPriceTour({ commit }, data) {
        try {
            const res = await this.$axios.post(apisAuth.priceTour.create, data);

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
    async deletePriceTour({ commit }, { tour_id, customer_type_id }) {
        try {
            const res = await this.$axios.delete(
                apisAuth.priceTour.delete
                    .replace(/:tour_id/, tour_id)
                    .replace(/:customer_type_id/, customer_type_id)
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
    async updatePriceTour({ commit }, { tour_id, customer_type_id, data }) {
        try {
            const res = await this.$axios.post(
                apisAuth.priceTour.update
                    .replace(/:tour_id/, tour_id)
                    .replace(/:customer_type_id/, customer_type_id),
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
