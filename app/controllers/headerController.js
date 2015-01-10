
adApp.controller('HeaderController', function ($scope, $location, authenticationService) {


    $scope.logout = function() {
        authenticationService.logout();
        $location.path('/home');
    };
});