import axios from "axios";

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
    return config;
};

const onSuccess = response => {
    return response.data;
};

const onError = error => {
    return Promise.reject(error.response.data);
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onSuccess, onError);

export default instance;
