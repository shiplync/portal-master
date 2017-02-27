"use strict";

/**
 * @ngdoc overview
 * @name shippersPortalApp
 * @description
 * # shippersPortalApp
 *
 * Main module of the application.
 */
var __env = getConfig();
angular.module('config', []).constant('ENV', __env);
angular
  .module('shippersPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.slider', // sliders for allshipments sidebar
    'ngFx', // animations
    'ngStorage',
    'mgcrea.ngStrap', // twitter bootstrap module
    'config', // angular config (e.g. ENV.API)
    'angularModalService', // TOS modal
    'angularFileUpload', // file/prof pic upload module
    'ngMap', // gmaps module
    'ui.router',
    'angularUtils.directives.dirPagination',

    'shippersPortalApp.constants.permissions',
    'shippersPortalApp.constants.usertype',
    'shippersPortalApp.constants.companytype',
    'shippersPortalApp.constants.accessblocktype',
    'shippersPortalApp.freight',
    'shippersPortalApp.shipments',
    'shippersPortalApp.settings',
    'shippersPortalApp.authentication',
    'shippersPortalApp.shared.conversion',
    'shippersPortalApp.temlocations',
    'shippersPortalApp.team',
    //'shippersPortalApp.main',
  ])
  .config(['$timepickerProvider', '$stateProvider', '$urlRouterProvider', 'P', '$compileProvider', '$provide', function ($timepickerProvider, $stateProvider, $urlRouterProvider, P, $compileProvider, $provide) {
    // Performance improvement
    $compileProvider.debugInfoEnabled(false);

    // configure shipment create and update timepicker
    angular.extend($timepickerProvider.defaults, {
      minuteStep: 15,
      minTime: 'now'
    });

    $provide.decorator('$uiViewScroll', function ($delegate) {
        return function (uiViewElement) {
            $('html,body').animate({
                scrollTop: uiViewElement.offset().top - 30
            }, 400);
        };
    });

    // $httpProvider.interceptors.push('authInceptor');
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/allshipments.html',
    //     controller: 'AllshipmentsCtrl',
    //     authenticate: true
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .when('/shipments/add', {
    //     templateUrl: 'views/shipments.html',
    //     controller: 'ShipmentsCtrl',
    //     authenticate: true
    //   })
    //   .when('/pending', {
    //     templateUrl: 'views/unverifieduser.html',
    //     controller: 'VerifyUserCtrl',
    //     authenticate: true
    //   })
    //   // .when('/shipments/delivered', {
    //   //   templateUrl: 'views/allshipments.html',
    //   //   controller: 'AllshipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/pending/carriers', {
    //   //   templateUrl: 'views/allshipments.html',
    //   //   controller: 'AllshipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/pending/pickup', {
    //   //   templateUrl: 'views/allshipments.html',
    //   //   controller: 'AllshipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/enroute', {
    //   //   templateUrl: 'views/allshipments.html',
    //   //   controller: 'AllshipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/pending', {
    //   //   templateUrl: 'views/allshipments.html',
    //   //   controller: 'AllshipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/update', {
    //   //   templateUrl: 'views/shipments.html',
    //   //   controller: 'ShipmentsCtrl',
    //   //   authenticate: true
    //   // })
    //   // .when('/shipments/shipment/:id', {
    //   //   templateUrl: 'views/shipment.html',
    //   //   controller: 'ShipmentCtrl',
    //   //   authenticate: true
    //   // })
    //   .when('/tos', {
    //     templateUrl: 'views/tos.html',
    //     controller: 'TermsOfServiceCtrl',
    //   })
    //   .when('/login', {
    //     templateUrl: 'views/login.html',
    //     controller: 'LoginCtrl'
    //   })
    //   .when('/register/:userType?', {
    //     templateUrl: 'views/register.html',
    //     controller: 'RegisterCtrl'
    //   })
    //   .when('/forgotpassword', {
    //     templateUrl: 'views/forgotpassword.html',
    //     controller: 'ForgotPasswordCtrl'
    //   })
    //   .when('/carriers/photo', {
    //     templateUrl: 'views/carriers/photo.html',
    //     controller: 'CarrierPhotoCtrl',
    //     authenticate:true
    //   })
    //   .when('/change-password', {
    //     templateUrl: 'views/change-password.html',
    //     controller: 'ChangePasswordCtrl',
    //     authenticate:true
    //   })
    //   .when('/shippers/saved-locations', {
    //     templateUrl: 'views/shippers/saved-locations/view.html',
    //     controller: 'SavedlocationsCtrl'
    //   })
    //   .when('/shippers/saved-locations/:id', {
    //     templateUrl: 'views/shippers/saved-locations/update.html',
    //     controller: 'ShippersSavedLocationsUpdateCtrl'
    //   })
    //   .when('/profile', {
    //     templateUrl: 'views/profile.html',
    //     controller: 'ProfileCtrl'
    //   })
    //   .when('/connections', {
    //     templateUrl: 'views/company-relations.html',
    //     controller: 'CompanyRelationsCtrl'
    //   })
    //   .when('/shipmentassignments/:id', {
    //     templateUrl: 'views/shipment-assignments.html',
    //     controller: 'ShipmentAssignmentsCtrl'
    //   })
    //   .when('/addshipment', {
    //     templateUrl: 'views/edit-shipment/edit-shipment.html',
    //     controller: 'EditShipmentCtrl'
    //   })
    //   .when('/editshipment/:id', {
    //     templateUrl: 'views/edit-shipment/edit-shipment.html',
    //     controller: 'EditShipmentCtrl'
    //   })
    //   .when('/shipments', {
    //     templateUrl: 'views/list-shipments.html',
    //     controller: 'ListShipmentsCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    //   delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise("/shipments");
    $stateProvider
    .state("index", {
      abstract: true,
      views: {
        "@": { templateUrl: "scripts/layout/tpl.dashboard.html" },
        "layout.content@index": { templateUrl: "scripts/layout/tpl.content.html" },
        "layout.control@index": { templateUrl: "scripts/layout/tpl.control.html" },
      },
      controller: ['$scope',
      function($scope) {

      }],
      data: {
        permissions: [],
      },
    })
    .state("home", {
      url: "/",
      data: {
        permissions: [P.viewShipment],
        redirectTo: 'shipments'
      },
    })
		.state("payment", {
			url: "/reg-pay",
			data:{
				permissions: [],
			},
		})
    // .state("connections", {
    //   url: "/connections",
    //   templateUrl: "views/company-relations.html",
    //   controller: "CompanyRelationsCtrl",
    //   data: {
    //     permissions: [P.viewCompanyInvite],
    //     navLabel: 'Connections'
    //   },
    // })
    // .state("addshipment", {
    //   url: "/addshipment",
    //   templateUrl: 'views/edit-shipment/edit-shipment.html',
    //   controller: 'EditShipmentCtrl',
    //   data: {
    //     permissions: [P.viewShipment, P.addshipment, P.changeShipment],
    //   },
    // })
    // .state("editshipment", {
    //   url: "/editshipment/:id",
    //   templateUrl: "views/edit-shipment/edit-shipment.html",
    //   controller: "EditShipmentCtrl",
    //   data: {
    //     permissions: [P.viewShipment, P.changeShipment],
    //   },
    // })
    // .state("login", {
    //   url: "/login",
    //   templateUrl: "views/login.html",
    //   controller: "LoginCtrl",
    //   data: {
    //     noAuthenticate: true,
    //   },
    // })
  }])
  // .run(function($rootScope, $location, $window, User, ModalService, Company) {
        /**
         * Redirect to login if route requires auth and you're not logged in
         */

        // $rootScope
        //   .$on('$routeChangeStart', function(event, next, current) {
        //     // send GA route
        //     if ($window.ga){
        //       $window.ga('send', 'pageview', { page: $location.path() });
        //     }
        //     // handle auth
        //     if (next.authenticate){
        //       $window.localStorage.verified = 'false';
        //       var userType = $window.localStorage.type;
        //       var verified = $window.localStorage.verified;
        //       if (typeof verified === 'undefined' || verified === 'false' || !verified) {
        //         Company.getSelf().then(function(response){
        //           if (response.data.verified) {
        //             $window.localStorage.verified = 'true';
        //           } else {
        //             $window.localStorage.verified = 'false';
        //           }
        //         }, function(err){

        //         });
        //       }
        //       if ($window.localStorage.token && userType) {
        //         $rootScope.isLoggedIn = true;
        //         // if user is logged in but unverified, recheck here
        //         if (verified === 'false'){
        //             User.getSelf().then(function(response){
        //             }, function(err){
        //               if ($window.localStorage.pending === 'true'){
        //                 // redirect to pending page if unverified
        //                 next.templateUrl = 'views/unverifieduser.html';
        //                 next.controller = 'VerifyUserCtrl';
        //                 $location.path('/pending');
        //               } else{
        //                 $window.localStorage.removeItem('type');
        //                 $window.localStorage.removeItem('pending');
        //                 $rootScope.isLoggedIn = false;
        //                 next.templateUrl = 'views/login.html';
        //                 next.controller = 'LoginCtrl';
        //                 $location.path('/login');
        //               }
        //           });
        //         } else {
        //           if ($window.localStorage.pending === 'true'){
        //             User.getTOSDate().then(function(response){
        //               var tosStatus = response.data.tos_status;
        //               if (tosStatus != 1){
        //                 $window.localStorage.pending = 'true';
        //                 // redirect to pending page if unverified
        //                 next.templateUrl = 'views/unverifieduser.html';
        //                 next.controller = 'VerifyUserCtrl';
        //                 $location.path('/pending')

        //               }
        //             }, function(err){
        //                 $window.localStorage.pending = 'true';
        //                 // redirect to pending page if unverified
        //                 next.templateUrl = 'views/unverifieduser.html';
        //                 next.controller = 'VerifyUserCtrl';
        //                 $location.path('/pending')
        //             });
        //           }
        //         }
        //       // if user is not logged in
        //       } else {
        //         $window.localStorage.removeItem('pending');
        //         $window.localStorage.removeItem('type');
        //         $rootScope.isLoggedIn = false;
        //         next.templateUrl = 'views/login.html';
        //         next.controller = 'LoginCtrl';
        //         // redirect to login page
        //         $location.path('/login');
        //       }
        //     } else {
        //     }
        //   });
  // });
