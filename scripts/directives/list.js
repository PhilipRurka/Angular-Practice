
angular.module('TodoListApp')
.directive('list', function() {
   return {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl',
        replace: true
    };
})
