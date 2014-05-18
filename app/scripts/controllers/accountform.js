'use strict';

angular.module('clubcardApp')
  .controller('AccountFormCtrl', function ($scope) {
    var form = this;
    $scope.account = {};

    $scope.reset = function() {
      $scope.account = {};
    };

    form.controlClasses = function(control) {
      if(!control) {
        return {};
      }
      return {
        'has-error': control.$invalid && !control.$pristine,
        'has-success': control.$valid && !control.$pristine,
      };
    };
  });
