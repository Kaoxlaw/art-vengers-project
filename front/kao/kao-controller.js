angular.module('artVengers').controller('kaoController', function($scope, $state, $http){

 $scope.cart = _cart;
 
  function _cart(){
      $state.go('cart');
    };
});