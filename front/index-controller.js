angular.module('artVengers').controller('indexController', function($scope, $state, $http,ngCart) {

    $scope.signup = _signup;
    $scope.signin = _signin;
    $scope.cart = _cart;


    function _signup() {
      $state.go('signup');
    };

    function _signin() {
      $state.go('signin');
    };

    function _cart() {
      $state.go('cart');
    };

    ngCart.setTaxRate(20);
    ngCart.setShipping(0);  

    
});