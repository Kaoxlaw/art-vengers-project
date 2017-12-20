angular.module('artVengers').controller('cartController', function($scope, $state, $http) {

    $scope.home = _home;
    

    function _home() {
      $state.go('home');
    };

    
});
