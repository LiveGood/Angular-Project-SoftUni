var adApp = angular.module('adApp', ['ngRoute', 'ui.bootstrap'])
   .config(function($routeProvider) {
      $routeProvider
         .when('/home', {
            templateUrl: 'app/partials/homePartial.html',
            controller: 'HomeController'
         })
          .when('/login', {
             templateUrl: 'app/partials/loginPartial.html',
             controller: 'LoginController'
          })
         .otherwise({ redirectTo: '/home' })
   });


