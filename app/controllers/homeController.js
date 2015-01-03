

adApp.controller('HomeController', function ($scope, $http) {
   $http.get('http://softuni-ads.azurewebsites.net/api/ads')
      .success(function(data) {
         $scope.fullAdsObj = data;
          $scope.ads = data['ads'];
      });

   $http.get('http://softuni-ads.azurewebsites.net/api/categories')
       .success(function(categories) {
          $scope.categories = categories;
       });

   $http.get('http://softuni-ads.azurewebsites.net/api/towns')
       .success(function(data) {
          $scope.towns = data;
       });

   $scope.noImageUrl = "app/imgs/No_image_available.jpg";

   $scope.ad = {
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