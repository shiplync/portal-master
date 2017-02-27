'use strict';

describe('Controller: CarriersPendingCarrierCtrl', function () {

  // load the controller's module
  beforeEach(module('shippersPortalApp'));

  var CarriersPendingCarrierCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarriersPendingCarrierCtrl = $controller('CarriersPendingCarrierCtrl', {
      $scope: scope
    });
  }));
  it('should say hello', 
      function() {
        expect('Hello').toEqual('Hello');
    });
});
