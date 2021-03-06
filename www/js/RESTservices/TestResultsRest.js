/* global angular */
angular.module('RESTServices')
.service('TestResultsRest', ['$http', '$window', function($http, $window){
    
    var TestResultsRest = this;
    var apiUrl = 'https://tktest-anoonan3805.c9users.io/api/TestResults';
    TestResultsRest.save = function(test){
        return $http ({
            url: apiUrl,
            method: 'POST',
            data: test,
            headers:{
                'Authorization': $window.localStorage.token
            }
        });
    
    }

    TestResultsRest.get = function(token,userID){
        return $http ({
            url: 'https://tktest-anoonan3805.c9users.io/api/TestResults?filter[where][userID]=' + userID,
            method: 'GET',
            headers:{
                'Authorization':token
            }
        });
    };
}]);
