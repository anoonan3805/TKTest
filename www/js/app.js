// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/*global angular*/
angular.module('starter', ['ionic', 'TKTestQuestions', 'starter.controllers', 'TKTestAnswers', 'chart.js', 'TKResultsButton', 'RESTServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'templates/landing.html'
    })
    .state('register', {
      url: '/register',
      controller: 'registerCtrl',
      templateUrl: 'templates/register.html'
    })
    .state('login', {
      url: '/login',
      controller: 'loginCtrl',
      templateUrl: 'templates/login.html'
    })
    .state('lobby', {
      url: '/lobby',
      controller: 'LobbyCtrl',
      templateUrl: 'templates/lobby.html',
    })
    .state('competing', {
      url: '/competing',
      templateUrl: 'templates/competing.html',
      controller: 'competingCtrl'
    })
    .state('question', {
      url: '/question:questionID',
      templateUrl: 'templates/question.html',
      controller: 'QuestionsCtrl',
      resolve: {
        testInfo: function($stateParams, TKTestQuestionService) {
          return TKTestQuestionService.getQuestion($stateParams.questionID);
        }
      }
    })
    .state('results', {
      url: '/results',
      templateUrl: 'templates/results.html',
      controller: 'ResultsCtrl',
      cache: false,
    })
    .state('history', {
      url: '/history',
      templateUrl: 'templates/history.html',
      controller: 'HistoryCtrl',
      resolve: {
        tests: ['TKAnswersService', '$state', function(TKAnswersService, $state) {
          return TKAnswersService.getTests()
            .then(
              function(response) {
                if (response.status == 200){}
                else if (response.status == 503){
                  alert("Could not contact server.");
                }
              },

              function(error) {

                if (error.status == 404) {
                  alert("The server has not found anything matching the Request-URI.");
                }
                else if (error.status == 500) {
                  alert("The world has ended, or the server just isn’t online. I'd keep my eyes peeled for zombies!");
                }
                else if (error.status == 401) {
                  alert("The request requires user authentication.");
                }
                else if (error.status == 503){
                  alert("Server did not respond.");
                }
                $state.go('login');

              });


        }]
      }
    });
});