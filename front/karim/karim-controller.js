angular.module('artVengers').controller('karimController', function($scope, $state, $http){


 $scope.cart = _cart;
 
  function _cart(){
      $state.go('cart');
    };
});