angular.module('workout')
.controller('joinCtrl', function($scope, mainService) {


$scope.submitJoin = function(gymJoin){
mainService.submitJoin(gymJoin).then(function(response) {
$scope.joined = response.data;
});
};


});
