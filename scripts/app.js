


angular.module('TodoListApp', [])

.directive('newTask', function() {
    return {
        template: '<a href="">+ Add a New Task</a>'
    };
})

.controller('mainCtrl', function($scope, dataList) {

    dataList.getList(function(response){
        console.log(response.data);
        $scope.inputLabels = response.data;
    })

})

.service('dataList', function($http) {
    this.getList = function(callback) {
        $http.get('../mock/todo-list.json')
        .then(callback)
    }
})
