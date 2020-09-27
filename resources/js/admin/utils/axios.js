import axios from "axios";
import store from "@/admin/store";

const instance = axios.create({
    baseURL: process.env.MIX_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
});

instance.defaults.headers.get["Content-Type"] = "application/json";
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const onRequest = config => {
    const {
        authenticate: { accessToken }
    } = store.state;
    if (config.method === "get") {
        store.commit("display/setLoadingTable", true);
    }
    if (accessToken) {
        config.headers.common["Authorization"] = "Bearer" + accessToken;
    }
    return config;
};

const onSuccess = response => {
    store.commit("display/setLoadingTable", false);
    return response.data;
};

const onError = error => {
    store.commit("display/setLoadingTable", false);
    return Promise.reject(error.response.data);
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onSuccess, onError);

export default instance;
