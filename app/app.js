var adApp = angular.module('adApp', ['ngRoute', 'ui.bootstrap'])
   .config(function($routeProvider) {
      $routeProvider
         .when('/home', {
            templateUrl: 'partials/homePartial.html',
            controller: 'HomeController'
         })
          .when('/login', {
             templateUrl: 'partials/loginPartial.html',
             controller: 'LoginController'
          })
         .otherwise({ redirectTo: '/home' })
   });


