
angular.module('apiTesting')
.directive('apiTest', function() {
   return {
        templateUrl: 'templates/apiTesting.html',
        controller: 'apiCtrl',
        replace: true
    };
})
