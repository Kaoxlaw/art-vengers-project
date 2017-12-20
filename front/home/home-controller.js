angular.module('artVengers').controller('homeController', function($scope, $state, $http) {

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
    }
});
