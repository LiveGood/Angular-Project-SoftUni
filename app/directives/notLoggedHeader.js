adApp.directive('notLoggedHeader', function() {
    return {
        restrict: 'A',
        templateUrl: 'app/partials/notLoggedHeader.html',
        replace: true
    }
});