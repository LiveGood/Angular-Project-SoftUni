
adApp.factory('dataService', function($resource, baseUrl) {
    function queryResource(urlParameter, success, error) {
        var resource = $resource(baseUrl + urlParameter);
        return resource.query(success, error);
    }

    var adsResouse = $resource(
        baseUrl + '/ads',
        null,
        {
            getAll: {method: "GET"}
        }
    );
    var towns = queryResource('/towns');
    var categories = queryResource('/categories');

    return {
        getTowns: function(success, error) {
            return queryResource('/towns', success, error);
        },
        getCategories: function() {
            return queryResource('/categories')
        },
        getAds: function(dataParams, succes, error) {
            return adsResouse.getAll(dataParams, succes, error);
        },
        towns: towns,
        categories: categories
    }
});