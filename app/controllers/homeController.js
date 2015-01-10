

adApp.controller('HomeController', function ($scope, $rootScope, $http, $location, dataService, authenticationService, pageSize, userService) {
   $scope.adsParams = {
      'startPage': 1,
      'pageSize': pageSize
   };

   $scope.changePage = function() {
      dataService.getAds(
          $scope.adsParams,
          function success(data) {
             $scope.ads = data;
          },
          function error(errorObj) {
             console.log(errorObj);
          }
      )
   };

   $scope.showUserAds = function() {
       userService.getUserAds(
           null,
           function success(data) {
               $scope.ads = data;
               console.log(data);
           },
           function error(errorObj) {
               console.log(errorObj);
           }
       )
   };

   $scope.urlLocation = $location.path();

   $scope.$on('categoryChanged', function(event, selectedCategory) {
      $scope.adsParams.categoryId = selectedCategory;
      $scope.adsParams.startPage = 1;
      $scope.changePage();
   });

   $scope.$on('townChanged', function(event, selectedTownId) {
       $scope.adsParams.townId = selectedTownId;
       $scope.adsParams.startPage = 1;
       $scope.changePage();
   });

   $scope.$on('preLoadUserAds', function(event) {

   });

    $scope.isUserLogged = function() {
        if (authenticationService.isLoggedIn()) {
            return true;
        }
    };

   $scope.userOwnsAd = function(adId) {
       return userService.userOwnsAd(adId, $scope.userAds);
   };

   $scope.changePage();
});