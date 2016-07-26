'use strict';

angular.module('ApiTesting')
.controller('apiCtrl', function($scope, $http) {
   $scope.list;
   $http.jsonp('https://api.dribbble.com/v1/users/simplebits/followers?page=2').then(function(data) {
      console.log(data);
   });
});
