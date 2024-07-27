// Override the geolocation methods to block location requests
navigator.geolocation.getCurrentPosition = function(success, error, options) {
    if (error) {
        error({ code: 1, message: "User denied Geolocation" });
    }
};

navigator.geolocation.watchPosition = function(success, error, options) {
    if (error) {
        error({ code: 1, message: "User denied Geolocation" });
    }
};
