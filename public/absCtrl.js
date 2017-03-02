angular.module('myApp')
  .controller('absCtrl', function($scope, $html) {
    $scope.abWkouts = "{}";
    $http.get("wkouts.json")
      .success(function(response){
        $scope.workout = response
      })
});
