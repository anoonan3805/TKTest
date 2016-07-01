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
                        $window.localStorage.token = response.data.id;
                        $window.localStorage.userID = response.data.userID;
                    $state.go('lobby');
                        
                    }
                    // handle different responses and decide what happens next
                }, function(error) {
                    // inform the user of any known problems that arose, otherwise give a generic
                    // failed message
                });

        };
    }]);
