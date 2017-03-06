angular.module('workout')
.service('mainService', function ($http) {

  this.test = function () {
    return $http.get('/api/test');
  };

  // this.getUsers = () => $http.get('/api/user');
  //
  // this.getUser = (id) => $http.get('/api/user?id=' + id)
  // };

  this.submitLog = (logRun) => $http.post('/api/Running', logRun)
  .then(function(response) {
    console.log(response)
  });
  this.submitRide = (logRide) => $http.post('/api/Biking', logRide)
  .then(function(response) {
    console.log(response)
  })
  this.submitGym = (logGym) => $http.post('/api/MainWorkout', logGym)
  .then(function(response) {
    console.log(response)
  })
  this.submitLift = (logLift) => $http.post('/api/perExercise', logLift)
  .then(function(response) {
    console.log(response)
  })

})
