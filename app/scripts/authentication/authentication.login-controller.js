"use strict";

angular.module('shippersPortalApp.authentication.login',[

  ])
.controller('loginController', function($scope, $state, AuthService, $rootScope, $q){

  $scope.init = function() {
    $scope.credentials = {
      username: '',
      password: ''
    };
  }

  $scope.login = function (credentials) {
    var defer = $q.defer();
    $scope.loginError = '';
    if (!credentials.username || !credentials.password) {
      $scope.loginError = "You must supply email and password";
      defer.reject();
      return defer.promise;
    }
    AuthService.login(credentials)
    .then(function(response) {
      $state.go('home');
    })
    .catch(function (err) {
      if(err.status==401) {
        $scope.loginError = "Wrong email or password";
      }
      defer.reject();
    });
    return defer.promise;
  };

})