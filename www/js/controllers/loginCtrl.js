/*global angular*/
angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', '$state', '$window', 'SSFUsersRest', function($scope, $state, $window, SSFUsersRest) {
 
 $scope.user = {};
        $scope.signInForm = function(form) {
            if (form.$invalid) return alert("Please sign in before proceeding.");

            SSFUsersRest.get($scope.user)
                .then(function(response) {
                    if (response.status == 200){
                        console.log(response);
                       // .token =
                    $state.go('lobby');
                        
                    }
                    // handle different responses and decide what happens next
                }, function(error) {
                    // inform the user of any known problems that arose, otherwise give a generic
                    // failed message
                });
                
                // $window.localStorage.token();
                // $window.localStorage.userID();
                

        };
    }]);
