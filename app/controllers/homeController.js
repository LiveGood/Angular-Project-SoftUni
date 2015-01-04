

adApp.controller('HomeController', function ($scope, $http) {
   var sc = $scope;

   sc.baseAdsUrl = 'http://softuni-ads.azurewebsites.net/api/ads';
   sc.currentPage = 1;
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

   $http.get('http://softuni-ads.azurewebsites.net/api/towns')
       .success(function(data) {
          sc.towns = data;
       });

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

   sc.ad = {
      "id": 120,
      "title": "Changed Ad Title",
      "text": "Changed ad text content",
      "date": "2015-01-01T20:07:33.0000000",
      "imageDataUrl": "data:image/jpeg;base64,iVBORw0KGgo...",
      "ownerName": "Test User",
      "ownerEmail": "nakov@gmail.com",
      "ownerPhone": "+359 2 981 981",
      "categoryId": 5,
      "townId": 2
   }
});