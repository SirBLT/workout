angular.module('workout')
.controller('bikeCtrl', function($scope, mainService) {

$scope.submitLog = function(logRide){
  mainService.submitLog(logRide)
}

});
