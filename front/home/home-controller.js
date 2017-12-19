angular.module('artVengers').controller('homeController', function($scope, $state, $http) {

    $scope.accountPage = _accountPage;
    $scope.login = _login;
    $scope;cart = _cart;

    function _accountPage() {
      $state.go('create-account');
    }

    function _login() {
      $state.go('login');
    }

    function _cart() {
      $state.go('cart');
    }
});
