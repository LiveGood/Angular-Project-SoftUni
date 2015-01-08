
adApp.factory('dataService', function($resource, baseUrl) {

    function queryResource(urlParameter, success, error) {
        var resource = $resource(baseUrl + urlParameter);
        return resource.query(success, error);
    }

    return {
        getTowns: function(success, error) {
            return queryResource('/towns', success, error);
        },
        getCategories: function() {
            return queryResource('/categories')
        }
    }
});