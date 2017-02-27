'use strict';

describe('Controller: ShippersSavedLocationsUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('shippersPortalApp'));

  var ShippersSavedLocationsUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShippersSavedLocationsUpdateCtrl = $controller('ShippersSavedLocationsUpdateCtrl', {
      $scope: scope
    });
  }));

});
