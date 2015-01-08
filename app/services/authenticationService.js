
adApp.factory('authenticationService', function($http, baseUrl) {
    function login(userData, success, error) {
        var request = {
            method: 'POST',
            url: baseUrl + '/user/login',
            data: userData
        };
        $http(request)
            .success(function(data){
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            })
            .error(function(error) {
                error(error);
            });
    }

    function isLoggedIn() {
        return sessionStorage['currentUser'] != undefined;
    }

    function getUsername() {
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']).username;
        }
    }

    function logout() {
        delete sessionStorage['currentUser'];
    }

    function register(userData, success, error) {
        var request = {
            method: 'POST',
            url: baseUrl + '/user/register',
            data: userData
        };

        $http(request)
            .success(function(data){
                success(data);
            })
            .error(function(errorData) {
                error(errorData);
            });
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        getUsername: getUsername,
        logout: logout,
        register: register
    }
});