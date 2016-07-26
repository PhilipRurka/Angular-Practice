
angular.module('ApiTesting')
.directive('api', function() {
   return {
        template: 'Testing',
        controller: 'apiCtrl',
        replace: true
    };
})
