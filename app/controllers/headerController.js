
adApp.controller('HeaderController', function ($scope, $location, authenticationService) {
    $scope.isUserLogged = function() {
        if (authenticationService.isLoggedIn()) {
            $scope.username = authenticationService.getUsername();
        }
        return authenticationService.isLoggedIn();
    };
    $scope.logout = function() {
        authenticationService.logout();
        $location.path('/home');
    }

});