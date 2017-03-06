angular.module('workout', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'mainCtrl',
    templateUrl: 'views/home.html'
  })
  .state('workout', {
    url: '/workout',
    controller: 'mainCtrl',
    templateUrl: 'views/workout-index.html'
  })
  .state('logRun', {
    url: '/log-run',
    controller: 'runCtrl',
    templateUrl: '/views/log-run.html'
  })
  .state('myWorkouts', {
    url: '/my-workouts',
    controller: 'mainCtrl',
    templateUrl: '/views/my-workouts.html'
  })
  .state('logBike', {
    url: '/log-bike',
    controller: 'bikeCtrl',
    templateUrl: '/views/log-bike.html'
  })
  .state('logGym', {
    url: '/log-gym',
    controller: 'gymCtrl',
    templateUrl: '/views/log-gym.html'
  })


})
