
adApp.controller('HeaderController', function ($scope, $location, authenticationService) {
    $scope.isUserLogged = function() {
        if (authenticationService.isLoggedIn()) {
            $scope.username = authenticationService.getUsername();
            return true;
        }
    };

    $scope.logout = function() {
        authenticationService.logout();
        $location.path('/home');
    };
});