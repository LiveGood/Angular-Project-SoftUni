

adApp.controller('HomeController', function ($scope, $http, dataService, pageSize) {
   var sc = $scope;
   sc.baseAdsUrl = 'http://softuni-ads.azurewebsites.net/api/ads';
   sc.currentPage = 1;
   sc.adsParams = {
      'startPage': 1,
      'pageSize': pageSize
   };
   sc.allAds = {};


   $http.get(sc.baseAdsUrl + '?pagesize=5')
      .success(function(data) {
          sc.ads = data['ads'];
          sc.allAds[sc.currentPage] = sc.ads;
          sc.totalItems = data['numItems'];
      });

   $http.get('http://softuni-ads.azurewebsites.net/api/categories')
       .success(function(categories) {
          sc.categories = categories;
       });

    $scope.towns = dataService.getTowns();

   sc.noImageUrl = "app/imgs/No_image_available.jpg";

   sc.changePage = function() {

      if (sc.allAds[sc.currentPage]) {
         sc.ads = sc.allAds[sc.currentPage];
         return;
      }

      $http.get(sc.baseAdsUrl + '?pagesize=5&startpage=' + sc.currentPage)
          .success(function(data) {
             sc.ads = data['ads'];
             sc.allAds[sc.currentPage] = sc.ads;
          })
   };

});