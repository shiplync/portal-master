'use strict';

describe('Service: geolocations', function () {

  // load the service's module
  beforeEach(module('shippersPortalApp'));

  // instantiate service
  var geolocations;
  beforeEach(inject(function (_geolocations_) {
    geolocations = _geolocations_;
  }));

  it('should do something', function () {
    expect(!!geolocations).toBe(true);
  });

});
