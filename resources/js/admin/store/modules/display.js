import apis from "@/admin/utils/apis";

const state = {
    isLoadingTable: false
};

const getters = {};

const mutations = {
    setLoadingTable(state, value) {
        state.isLoadingTable = value;
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
