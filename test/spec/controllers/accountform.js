'use strict';

describe('Controller: AccountformCtrl', function () {

  // load the controller's module
  beforeEach(module('clubcardApp'));

  var AccountformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountformCtrl = $controller('AccountformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
