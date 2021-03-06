'use strict';

angular.module('TodoListApp')
.controller('listCtrl', function($scope, dataList) {

    /**************** Need For File ****************/
   //  $scope.inputLabels = [
   //      {"name": "feed the fishes"},
   //      {"name": "Drink more coffee"},
   //      {"name": "Pay for napkins"},
   //      {"name": "Trip and fall."},
   //      {"name": "Sing to the Bearded Lady"}
   //  ]
    /**************** Need For File ****************/

    /**************** Need For Github ****************/
    dataList.getList(function(response){
        console.log(response.data);
        $scope.inputLabels = response.data;
    })
    /**************** Need For Github ****************/

   $scope.addListItem = function() {
      var inputLabel = {'name': 'This is your new task.'};
      $scope.inputLabels.unshift(inputLabel);
   };

   $scope.saveListItems = function() {
      var filteredInputLabels = $scope.inputLabels.filter(function(inputLabel) {
         if (inputLabel.edited) {
            return inputLabel;
         };
      });
      dataList.saveListItems(filteredInputLabels);
   };

   $scope.deleteListItem = function(inputLabel, $index) {
      dataList.deleteListItem(inputLabel);
      $scope.inputLabels.splice($index, 1);
   };
})
