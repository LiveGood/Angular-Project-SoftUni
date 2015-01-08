
adApp.controller('RegisterController', function ($scope, $location, authenticationService, dataService) {
    $scope.register = function(userData) {
        authenticationService.register(userData,
            function success(data) {
                alert("Register successful");
                console.log(data);
                $location.path('/');
            },
            function(error) {
                alert('Unsuccessful register');
                console.log(error);
            }

        )
    };

    $scope.towns = dataService.getTowns();
    window.towns = $scope.towns;

});