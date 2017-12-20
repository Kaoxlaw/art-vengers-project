angular.module('artVengers').controller('loginController', function($scope, $state, $http) {
 
 $scope.signIn = _signIn;

function _signIn() {
    var data = {
      email: $scope.email,
      password: $scope.password
    };

    $http.post('http://localhost:3000/signin', data).then(
      function(res) {
        localStorage.setItem('accesstoken', res.data.token);
        alert(res.data.message);
        $state.go('home');
      }, function(res) {
        console.log(res.data);
      }
    );
  }

});
