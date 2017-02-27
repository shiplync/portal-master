'use strict';

/**
 * @ngdoc function
 * @name shippersPortalApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the shippersPortalApp
 */
angular.module('shippersPortalApp')
  .controller('NavbarCtrl', function ($scope, $location, $window, AuthService, $state, AuthStatus, analytics) {
    $scope.isAuthenticated = AuthStatus.isAuthenticated;

    $scope.userLogout = function() {
      AuthService.logout()
      .then(function() {
        analytics.track('logout', {});
        $state.go('login');
      });
    };

    $scope.settingsState = $state.get('settings');
    $scope.navStates = [
      {
        parentState: $state.get('freight'),
        gotoState: $state.get('shipments')
      },
      // {
      //   parentState: $state.get('connections'),
      //   gotoState: $state.get('connections')
      // },
      {
        parentState: $state.get('team'),
        gotoState: $state.get('users')
      }
    ];

    $scope.showState = function(state) {
      if(AuthStatus.isAuthenticated()) {
        if(AuthService.isAuthorized(state.data.permissions)) {
          return true;
        } else {
          return false;
        }
      } else {
        if(state.data.noAuthenticate === true) {
          return true;
        } else {
          return false;
        }
      }
    };

    $scope.highlightNavState = function(state, params) {
      return $state.includes(state, params) ? 'active' : '';
    }

    
    // // a function to change navbar settings based on the location and localStorage
    // var updatePathSettings = function(){
    //    var path = $location.path();
    //   $scope.userType = $window.localStorage.type;
    //   $scope.pending = $window.localStorage.pending;
    //   if (path === '/shipments/pending/carriers'){
    //     $scope.active = 'pendingShipments';
    //   }
    //     else if (path === '/shipments/pending'){
    //     $scope.active = 'progressShipments';
    //   } else if (path === '/shipments/add') {
    //     $scope.active = 'addShipment';  
    //   } else if (path === '/shipments/delivered'){
    //     $scope.active="deliveredShipments";
    //   } else if (path === '/'){
    //     $scope.active = 'allShipments';
    //   } else{
    //     $scope.active = '';
    //   }
    // } 
    
    // // initialize path settings
    // updatePathSettings();
    
    // every time to location changes, update the settings
    // $scope.$on('$locationChangeSuccess', function(){
    //     updatePathSettings();
    // });

    // $scope.logout = function(){
    // 	$window.localStorage.verified = false;
    // 	auth.logout();
    //   $location.path('/login');
    // }
   // $scope.profile = function(){
   //    $location.path('/carriers/profile');
   //  }
   //  $scope.carriersDropdown = [
   //    {
   //      "text": "Edit Profile",
   //      "href": "#/profile"
   //    },
   //    {
   //      "text": "Upload Profile Photo",
   //      "href": "#/carriers/photo"
   //    },
   //    {
   //      "text": "Logout",
   //      "click": "logout()"
   //    }
   //  ]; 
   //  $scope.shippersDropdown = [
   //    {
   //      "text": "Edit Profile",
   //      "href": "#/profile"
   //    },
   //    {
   //      "text": "Edit Saved Locations",
   //      "href": "#/shippers/saved-locations"
   //    },
   //    {
   //      "text": "Logout",
   //      "click": "logout()"
   //    }
   //  ];
  });
