const apisAuth = {
    users: {
        get: "auth/users",
        post: "auth/users",
        delete: "auth/users/:id",
        put: "auth/users/:id"
    },
    auth: {
        login: "auth/login",
        logout: "auth/logout"
    }
};

export { apisAuth };
