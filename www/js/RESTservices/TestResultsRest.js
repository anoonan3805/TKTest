/* global angular */
angular.module('RESTServices')
.service('TestResultsRest', ['$http', function($http){
    
    var TestResultsRest = this;
    var apiUrl = 'https://tktest-anoonan3805.c9users.io/api/TestResults/';
    TestResultsRest.save = function(test){
        return $http ({
            url: apiUrl,
            method: 'POST',
            data: test
        });
    
    }

    TestResultsRest.get = function(){
        return $http ({
            url: apiUrl,
            method: 'GET'
        });
    };
}]);
