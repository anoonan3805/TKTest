 /*global angular*/
 angular.module("RESTServices", [])
  .service("SSFUsersRest", ['$http', function($http) {
    var SSFUsersRest = this;
    var apiUrl = "https://tktest-anoonan3805.c9users.io/api/SSFUsers";
 
    SSFUsersRest.post = function(newUserData) {
     return $http({
      url: apiUrl,
      method: "POST",
      data: newUserData
 
     });
   };
  }]);