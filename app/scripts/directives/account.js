'use strict';

angular.module('clubcardApp')
  .directive('account', function () {
    return {
      restrict: 'E',
      templateUrl: 'account.html',
    };
  });
