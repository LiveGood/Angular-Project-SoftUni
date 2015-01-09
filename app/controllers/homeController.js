

adApp.controller('HomeController', function ($scope, $rootScope, $http, dataService, authenticationService, pageSize, userService) {
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

   $scope.$on('showUserAds', function() {
       userService.getUserAds(
           null,
           function success(data) {
               $scope.ads = data;
               alert('We are here!')
               $scope.$digest();
           },
           function error(errorObj) {
               console.log(errorObj);
           }
       )
   });

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

   $scope.changePage();
});