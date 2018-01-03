angular.module('artVengers').controller('homeController', function($scope, $state, $http) {

    $scope.signup = _signup;
    $scope.signin = _signin;
    $scope.cart = _cart;
    $scope.matthieu = _matthieu;
    $scope.karim = _karim;
    $scope.kao = _kao;
    $scope.jeremy = _jeremy;


    function _signup() {
      $state.go('signup');
    };

    function _signin() {
      $state.go('signin');
    };

    function _cart() {
      $state.go('cart');
    };

    function _matthieu() {
      $state.go('matthieu');
    };

    function _karim() {
      $state.go('karim');
    };

    function _kao() {
      $state.go('kao');
    };

    function _jeremy() {
      $state.go('jeremy');
    };

});
