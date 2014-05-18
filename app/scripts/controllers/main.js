'use strict';

angular.module('clubcardApp')
  .controller('MainCtrl', function($scope, $window) {
    var main = this;

    // Use localstorage if available
    if($window.localStorage && $window.localStorage.getItem) {
      var storedAccounts = $window.localStorage.getItem('accounts');
      if(storedAccounts) {
        $scope.accounts = angular.fromJson(storedAccounts);
      }
    }

    if(!$scope.accounts) {
      $scope.accounts = {};
    }

    $scope.$watch('accounts', function(newVal) {
      if((newVal === undefined) || (newVal === null)) {
        return;
      }

      if($window.localStorage && $window.localStorage.setItem) {
        $window.localStorage.setItem('accounts', angular.toJson(newVal));
      }
    }, true);

    main.removeAccount = function(account) {
      delete $scope.accounts[account.id];
    };

    main.addAccount = function(account) {
      var id = Date.now();
      var newAccount = {
        id: id,
        title: account.name,
        number: ''+account.number,
        code: ''+account.number,
        createdDate: Date.now(),
      };

      if(newAccount.code.substr(0, 5) === '63400') {
        newAccount.code = '979' + newAccount.code.substr(5);
      }

      $scope.accounts[id] = newAccount;
    };
  });
