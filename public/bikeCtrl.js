angular.module('workout')
.controller('bikeCtrl', function($scope, mainService) {

$scope.submitRide = function(logRide){
  mainService.submitRide(logRide)
}

});
