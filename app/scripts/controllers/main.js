'use strict';

angular.module('clubcardApp')
  .controller('MainCtrl', function($scope, $window, $modal) {
    var main = this;

    $scope.accounts = [];

    // Use localstorage if available
    if($window.localStorage && $window.localStorage.getItem) {
      var storedAccounts = $window.localStorage.getItem('accounts');
      if(storedAccounts) {
        $scope.accounts = angular.fromJson(storedAccounts);
      }
    }

    $scope.$watch('accounts', function(newVal) {
      if((newVal === undefined) || (newVal === null)) {
        return;
      }

      if($window.localStorage && $window.localStorage.setItem) {
        $window.localStorage.setItem('accounts', angular.toJson(newVal));
      }
    }, true);

    main.openAddAccountModal = function() {
      $modal.open({
        templateUrl: 'addAccountModalContent.html',
      }).result.then(function(account) {
        main.addAccount(account);
      });
    };

    main.removeAccount = function(a) {
      var newAccounts = [];
      angular.forEach($scope.accounts, function(account) {
        if(account.id === a.id) { return; }
        newAccounts.push(account);
      });
      $scope.accounts = newAccounts;
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

      $scope.accounts.push(newAccount);
    };
  });
