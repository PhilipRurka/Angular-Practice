
angular.module('apiTesting')
.directive('api', function() {
   return {
        template: 'Testing',
        controller: 'apiCtrl',
        replace: true
    };
})
