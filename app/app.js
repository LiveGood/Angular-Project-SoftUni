'use strict';

var adApp = angular.module('adApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

adApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
adApp.constant('pageSize', 5);

adApp .config(function($routeProvider) {
   $routeProvider
        .when('/home', {
         templateUrl: 'app/partials/homel.html',
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
      .otherwise({ redirectTo: '/home' })
});


