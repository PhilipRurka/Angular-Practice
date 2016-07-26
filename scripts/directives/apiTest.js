
angular.module('apiTesting')
.directive('api', function() {
   return {
        template: '<h1>Testing</h1>',
        controller: 'apiCtrl',
        replace: true
    };
})
