angular.module('workout')
.controller('runshowCtrl', function($scope, mainService) {


$scope.showRuns = function(grabRuns){
mainService.showRuns(grabRuns).then(function(response) {
$scope.runs = response.data;
});
};


});
