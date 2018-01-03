angular.module('artVengers').controller('cartController', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(20);
    ngCart.setShipping(0);  

    $scope.check = _check;

    function _check(){
    	$state.go('check');
    };
}]);
