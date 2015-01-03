
adApp.filter('imageFilter', function() {
    var filter = function(url, scope) {
        if (url) {
            return url;
        }
        return scope.noImageUrl;
    };

    return filter;
});