angular.module('starter.controllers')
    .controller('landingCtrl',[ function(){
    
var deploy = new Ionic.Deploy();
  deploy.setChannel("dev");
  
var deploy = new Ionic.Deploy();
  deploy.check().then(function(hasUpdate) {
    console.log('Ionic Deploy: Update available: ' + hasUpdate);
    if(hasUpdate) {
    //Perform update
    }
  }, function(err) {
    console.error('Ionic Deploy: Unable to check for updates', err);
  });
  
    }]);
    
     var deploy = new Ionic.Deploy();
  deploy.update().then(function(res) {
    //App will automatically reload when updated successfully
     console.log('Ionic Deploy: Update Success! ', res);
     alert("Update success!");
  }, function(err) {
    console.log('Ionic Deploy: Update error! ', err);
    alert("Update error!")
  }, function(prog) {
     console.log('Ionic Deploy: Progress... ', prog);
     alert("Progress...");
  });