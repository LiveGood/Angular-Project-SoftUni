var adApp = angular.module('adApp', ['ngRoute']);

adApp.config(function($routeProvider) {
   $routeProvider
      .when('/home', {
         templateUrl: 'partials/homePartial.html',
         controller: 'HomeController'
      })
      .otherwise({ redirectTo: '/home' })
});



