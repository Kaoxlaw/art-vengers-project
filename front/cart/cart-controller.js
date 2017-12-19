angular.module('artVengers').controller('cartController', function($state, $http, $scope) {

  $scope.return = _return;

  function _return() {
    $state.go('home');
  }

});
