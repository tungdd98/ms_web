const apis = {
    auth: {
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
        vehicleTour: {
            get: "auth/vehicle_tour",
            create: "auth/vehicle_tour",
            delete: "auth/vehicle_tour/:id",
            update: "auth/vehicle_tour/:id"
        },
        customerType: {
            get: "auth/customer_type",
            create: "auth/customer_type",
            delete: "auth/customer_type/:id",
            update: "auth/customer_type/:id"
        },
        locations: {
            get: "auth/locations",
            create: "auth/locations",
            delete: "auth/locations/:id",
            update: "auth/locations/:id"
        },
        tours: {
            get: "auth/tours",
            create: "auth/tours",
            delete: "auth/tours/:id",
            update: "auth/tours/:id"
        },
        departureDay: {
            get: "auth/departure_day",
            create: "auth/departure_day",
            delete: "auth/departure_day/:id",
            update: "auth/departure_day/:id"
        },
        priceTour: {
            get: "auth/price_tour",
            create: "auth/price_tour",
            delete: "auth/price_tour/:tour_id/:customer_type_id",
            update: "auth/price_tour/:tour_id/:customer_type_id"
        }
    },
    login: "auth/login",
    logout: "auth/logout",
    register: "auth/register",
    tourHotHomePage: "/get-tours-home-page"
};

export default apis;
