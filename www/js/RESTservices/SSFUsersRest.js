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
   
   SSFUsersRest.get = function(user){
    return $http({
     url: apiUrl + '/login',
     method: "POST",
     data: user
    });
   };
  }]);