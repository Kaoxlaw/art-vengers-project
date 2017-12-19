angular.module('artVengers').controller('loginController', function($state, $http, $scope) {

  $scope.login = _login;
  $scope.return = _return;

  function _login() {
    if($scope.username && $scope.password) {
      var user = {
        username = $scope.username,
        password = $scope.password
      };
      //voir pour le USER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      $http.post('http://localhost:3000/login', user).then(
        function(response) {
        alert('Bienvenue à la maison mon pote !')
      });
    }
  }

  function _return() {
    $state.go('home');
  }
});
