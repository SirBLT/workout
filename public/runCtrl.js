angular.module('workout')
.controller('runCtrl', function($scope, mainService) {

$scope.submitLog = function(logRun){
  mainService.submitLog(logRun)
}

});
