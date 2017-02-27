'use strict';

describe('Controller: ModifyShipmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('shippersPortalApp'));

  var ModifyshipmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModifyshipmentsCtrl = $controller('ModifyshipmentsCtrl', {
      $scope: scope
    });
  }));

/*  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/

});
