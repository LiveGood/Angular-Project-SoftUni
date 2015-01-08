
adApp.controller('LoginController',
    function ($scope, $location, authenticationService, dataService) {
        $scope.login = function(userData) {
            authenticationService.login(userData,
                function success(data) {
                    alert("Login successful");
                    console.log(data);
                    $location.path('/');
                },
                function(error) {
                    alert('Unsuccessful login');
                    console.log(error);
                }

            )
        };
});