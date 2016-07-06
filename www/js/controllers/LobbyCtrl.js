/* global angular */
angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', '$state', 'TKTestQuestionService', 'TKAnswersService', '$window', 'SSFUsersRest',

        function($scope, $state, TKTestQuestionService, TKAnswersService, $window, SSFUsersRest) {
            console.log("Calling questions?");

            TKTestQuestionService.all();

            $scope.logOut = function() {
                SSFUsersRest.logOut()
                $window.localStorage.token = "";
                $window.localStorage.userID = "";
                $state.go('landing');
            };

            $scope.goToTest = function() {
                TKAnswersService.resetAnswers();
                $state.go('question', {
                    questionID: 1
                });
            };

        }
    ]);