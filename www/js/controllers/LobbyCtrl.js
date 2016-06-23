angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', '$state', 'TKTestQuestionService', 'TKAnswersService',

        function($scope, $state, TKTestQuestionService, TKAnswersService) {
            console.log("Calling questions?");

            TKTestQuestionService.all();


            $scope.goToTest = function() {
                TKAnswersService.resetAnswers();
                $state.go('question', {
                    questionID: 1
                });
            };

        }
    ]);