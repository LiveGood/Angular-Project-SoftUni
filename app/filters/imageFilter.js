
adApp.filter('imageFilter', function(noImageUrl) {
    var filter = function(url) {
        if (url) {
            return url;
        }
        return noImageUrl;
    };

    return filter;
});