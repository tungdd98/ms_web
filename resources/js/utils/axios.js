import axios from "axios";
import store from "@/store";
import { API_URL } from "./constants";

const instance = axios.create({
    baseURL: process.env.APP_URL ? process.env.APP_URL + "/api" : API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
});

instance.defaults.headers.get["Content-Type"] = "application/json";

const onRequest = config => {
    store.commit("display/setLoadingTable", true);
    return config;
};

const onSuccess = response => {
    store.commit("display/setLoadingTable", false);
    return response;
};

const onError = error => {
    store.commit("display/setLoadingTable", false);
    return Promise.reject(error.response.data);
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onSuccess, onError);

export default instance;
