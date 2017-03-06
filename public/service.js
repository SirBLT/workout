angular.module('workout')
.service('mainService', function ($http) {





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
  this.submitJoin = (gymJoin) => $http.post('/api/MainWorkout/', {gymJoin:gymJoin})
  .then(function(response) {
    console.log(response)
    return response;
  })


})
