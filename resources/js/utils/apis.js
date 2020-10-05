const apis = {
    auth: {
        users: {
            get: "auth/get-list-user",
            create: "auth/create-user",
            delete: "auth/delete-user/:id",
            update: "auth/update-user/:id"
        },
        countries: {
            get: "auth/get-list-country",
            create: "auth/create-country",
            delete: "auth/delete-country/:id",
            update: "auth/update-country/:id",
            all: "auth/get-all-country"
        },
        timeTour: {
            get: "auth/get-list-time-tour",
            create: "auth/create-time-tour",
            delete: "auth/delete-time-tour/:id",
            update: "auth/update-time-tour/:id",
            all: "auth/get-all-time-tour"
        },
        vehicleTour: {
            get: "auth/get-list-vehicle-tour",
            create: "auth/create-vehicle-tour",
            delete: "auth/delete-vehicle-tour/:id",
            update: "auth/update-vehicle-tour/:id",
            all: "auth/get-all-vehicle-tour"
        },
        customerType: {
            get: "auth/get-list-customer-type",
            create: "auth/create-customer-type",
            delete: "auth/delete-customer-type/:id",
            update: "auth/update-customer-type/:id",
            all: "auth/get-all-customer-type"
        },
        locations: {
            get: "auth/get-list-location",
            create: "auth/create-location",
            delete: "auth/delete-location/:id",
            update: "auth/update-location/:id",
            all: "auth/get-all-location"
        },
        tours: {
            get: "auth/get-list-tour",
            create: "auth/create-tour",
            delete: "auth/delete-tour/:id",
            update: "auth/update-tour/:id",
            all: "auth/get-all-tour"
        },
        departureDay: {
            get: "auth/get-list-departure-day",
            create: "auth/create-departure-day",
            delete: "auth/delete-departure-day/:id",
            update: "auth/update-departure-day/:id"
        },
        priceTour: {
            get: "auth/get-list-price-tour",
            create: "auth/create-price-tour",
            delete: "auth/delete-price-tour/:tour_id/:customer_type_id",
            update: "auth/update-price-tour/:tour_id/:customer_type_id"
        }
    },
    login: "auth/login",
    logout: "auth/logout",
    register: "auth/register",
    tourHotHomePage: "/get-tours-home-page",
    locations: "/get-locations-home-page",
    allCountryNav: "/get-all-country-nav"
};

export default apis;
