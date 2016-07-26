
angular.module('apiTesting')
.directive('api', function() {
   return {
        templateUrl: 'templates/apiTest.html',
        controller: 'apiCtrl',
        replace: true
    };
})
