const apisAuth = {
    users: {
        get: "auth/users",
        create: "auth/users",
        delete: "auth/users/:id",
        update: "auth/users/:id"
    },
    countries: {
        get: "auth/countries",
        create: "auth/countries",
        delete: "auth/countries/:id",
        update: "auth/countries/:id"
    },
    auth: {
        login: "auth/login",
        logout: "auth/logout",
        register: "auth/register"
    }
};

export { apisAuth };
