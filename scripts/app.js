


angular.module('TodoListApp', [])

.directive('newTask', function() {
   return {
        template: '<a href="">+ Add a New Task</a>'
    };
})

.controller('mainCtrl', function($scope, dataList) {

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

   $scope.saveListItem = function(inputLabel) {
      dataList.saveListItem(inputLabel);
   };

   $scope.deleteListItem = function(inputLabel, $index) {
      dataList.deleteListItem(inputLabel);
      $scope.inputLabels.splice($index, 1);
   };
})

.service('dataList', function($http) {

    /**************** Need For Github ****************/
    this.getList = function(callback) {
        $http.get('../Angular-Practice/mock/todo-list.json')
        .then(callback)
    }
    /**************** Need For Github ****************/


    this.deleteListItem = function(inputLabel) {
        console.log('The ' + inputLabel.name + ' todo has been deleted.');
    }

    this.saveListItem = function(inputLabel) {
        console.log('The ' + inputLabel.name + ' todo has been saved.');
    }
})
