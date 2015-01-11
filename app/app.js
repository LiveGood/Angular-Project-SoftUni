'use strict';

var adApp = angular.module('adApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

adApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
adApp.constant('pageSize', 5);
adApp.constant('noImageUrl', "app/imgs/No_image_available.jpg");

adApp.run(function($rootScope, authenticationService) {
    $rootScope.isUserLogged = function() {
        if (authenticationService.isLoggedIn()) {
            $rootScope.username = authenticationService.getUsername();
            return true;
        }
    };
});

adApp.config(function($routeProvider) {
   $routeProvider
        .when('/home', {
           templateUrl: 'app/partials/home.html',
           controller: 'HomeController'
        })
        .when('/login', {
           templateUrl: 'app/partials/login.html',
           controller: 'LoginController'
        })
        .when('/register', {
           templateUrl: 'app/partials/register.html',
           controller: 'RegisterController'
        })
       .when('/user/ads/', {
           templateUrl: 'app/partials/home.html',
           controller: 'UserAdsController'
       })
       .when('/user/ads/publish', {
           templateUrl: 'app/partials/publishAd.html',
           controller: 'PublishAdController'
       })
       .when('/user/edit', {
            templateUrl: 'app/partials/editProfile.html',
            controller: 'EditProfileController'
       })
      .otherwise({ redirectTo: '/home' })
});


