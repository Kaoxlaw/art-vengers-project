angular.module('artVengers').controller('homeController', function($scope, $state, $http) {

    $scope.accountPage = _accountPage;
    $scope.login = _login;

    function _accountPage() {
      $state.go('create-account');
    }

    function _login() {
      $state.go('login');
    }
});
