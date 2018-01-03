angular.module('artVengers').controller('jeremyController', function($scope, $state, $http){

 $scope.cart = _cart;
 
  function _cart(){
      $state.go('cart');
    };
});