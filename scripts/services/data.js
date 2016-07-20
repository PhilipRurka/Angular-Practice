'use strict';

angular.module('TodoListApp')
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
