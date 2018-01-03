angular.module('artVengers').controller('matthieuController', function($scope, $state, $http){

 $scope.cart = _cart;
 
  function _cart(){
      $state.go('cart');
    };
});