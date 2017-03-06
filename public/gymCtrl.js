angular.module('workout')
.controller('gymCtrl', function($scope, mainService) {

$scope.submitGym = function(logGym){
  mainService.submitGym(logGym)
};

$scope.submitLift = function(logLift){
  mainService.submitLift(logLift)
};

});
