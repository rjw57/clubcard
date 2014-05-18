'use strict';

angular.module('clubcardApp')
  .controller('MainCtrl', function() {
    var self = this;

    self.accounts = [{
      title: 'Clem Cooper',
      code: '9794024175390717',
    },{
      title: 'Mr Smith',
      code: 'Testing',
    }];
  });
