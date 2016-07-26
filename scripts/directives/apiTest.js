
angular.module('apiTesting')
.directive('apiTest', function() {
   return {
        templateUrl: 'templates/apiTest.html',
        controller: 'apiCtrl',
        replace: true
    };
})
