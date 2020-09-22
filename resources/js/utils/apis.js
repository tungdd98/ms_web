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
    timeTour: {
        get: "auth/time_tour",
        create: "auth/time_tour",
        delete: "auth/time_tour/:id",
        update: "auth/time_tour/:id"
    },
    auth: {
        login: "auth/login",
        logout: "auth/logout",
        register: "auth/register"
    }
};

export { apisAuth };
