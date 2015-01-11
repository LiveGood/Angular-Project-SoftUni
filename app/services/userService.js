
adApp.factory('userService', function($http, baseUrl, authenticationService) {
    return {
        publishNewAd: function (adData, success, error) {
            var request = {
                method: 'POST',
                url: baseUrl + '/user/ads',
                headers: authenticationService.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        },
        getUserAds: function(params, success, error) {
            var request = {
                method: 'GET',
                url: baseUrl + '/user/ads',
                headers: authenticationService.getAuthHeaders(),
                params: params
            };

            $http(request)
                .success(success)
                .error(error);
        },
        userOwnsAd: function(adId, userAds) {
            //console.log(adId);
            //console.log(userAds);
        },
        getUserProfile: function(success, error) {
            var request = {
                method: 'GET',
                url: baseUrl + '/user/profile',
                headers: authenticationService.getAuthHeaders()
            };

            $http(request)
                .success(success)
                .error(error);
        },
        editProfile: function(userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + '/user/profile',
                headers: authenticationService.getAuthHeaders(),
                data: userData
            };

            $http(request)
                .success(success)
                .error(error);
        },
        changePassword: function(userPasswordData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + '/user/profile/changepassword',
                headers: authenticationService.getAuthHeaders(),
                data: userPasswordData
            };

            $http(request)
                .success(success)
                .error(error);
        }

    }
});