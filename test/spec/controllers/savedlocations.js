'use strict';

describe('Controller: SavedlocationsCtrl', function () {

  // load the controller's module
  beforeEach(module('shippersPortalApp'));

  var SavedlocationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SavedlocationsCtrl = $controller('SavedlocationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
