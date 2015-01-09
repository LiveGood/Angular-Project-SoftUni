
adApp.controller('RegisterController', function ($scope, $location, authenticationService, dataService) {
    $scope.register = function(userData) {
        userData.townId = userData.townId.id;
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

    $scope.towns = dataService.towns;
    $scope.userData = {};
    $scope.userData.townId = {value: 0, label: 'Select town'};


});