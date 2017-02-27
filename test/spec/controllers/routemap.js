'use strict';

describe('Controller: RouteMapCtrl', function () {

  // load the controller's module
  beforeEach(module('shippersPortalApp'));

  var RoutemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoutemapCtrl = $controller('RouteMapCtrl', {
      $scope: scope
    });
  }));
});
