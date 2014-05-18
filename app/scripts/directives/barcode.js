'use strict';

angular.module('clubcardApp')
  .directive('barcode', function () {
    return {
      template: '<img></img>',
      restrict: 'E',
      scope: {
        'code': '='
      },
      link: function(scope, element) {
        $(element).find('img').JsBarcode(''+scope.code, {
          width: 1,
          height: 50,
        });
      },
    };
  });
