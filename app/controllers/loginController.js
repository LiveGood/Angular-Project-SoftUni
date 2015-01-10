
adApp.controller('LoginController',
    function ($scope, $location, authenticationService, $rootScope) {
        $scope.login = function(userData) {
            authenticationService.login(userData,
                function success(data) {
                    alert("Login successful");
                    $location.path('/home');
                },
                function(error) {
                    alert('Unsuccessful login');
                    console.log(error);
                }

            )
    };
});