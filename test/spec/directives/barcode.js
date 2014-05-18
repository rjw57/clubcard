'use strict';

describe('Directive: barcode', function () {

  // load the directive's module
  beforeEach(module('clubcardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<barcode></barcode>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the barcode directive');
  }));
});
