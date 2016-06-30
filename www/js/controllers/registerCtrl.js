/*global angular*/
angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', '$state', '$window', 'SSFUsersRest', function($scope, $state, $window, SSFUsersRest) {

        $scope.user = {};
        $scope.signupForm = function(form) {
            if (form.$invalid) return alert("Please complete the form before proceeding.");

            SSFUsersRest.post($scope.user)
                .then(function(response) {
                    if (response.status == 200){
                    $state.go('lobby');
                        
                    }
                    // handle different responses and decide what happens next
                }, function(error) {
                    // inform the user of any known problems that arose, otherwise give a generic
                    // failed message
                });
                //$window.localStorage.token();
                //$window.localStorage.userID();
                

        };
    }]);

  