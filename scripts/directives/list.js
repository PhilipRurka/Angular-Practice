
angular.module('TodoListApp')
.directive('list', function() {
   return {
        templateUrl: 'templates/list.html',
        controller: 'mainCtrl',
        replace: true
    };
})
