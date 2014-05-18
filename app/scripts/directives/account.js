'use strict';

angular.module('clubcardApp')
  .directive('account', function () {
    return {
      restrict: 'E',
      scope: {
        'onremove': '=',
        'account': '=',
      },
      templateUrl: 'account.html',
      controllerAs: 'ctrl',
      controller: function($scope) {
        var account = this;
        account.remove = function() {
          if($scope.onremove) {
            $scope.onremove($scope.account);
          }
        };
      },
    };
  });
