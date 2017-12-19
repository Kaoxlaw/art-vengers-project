angular.module('artVengers').controller('createAccountController', function ($scope, $http) {

  $scope.signUp = _signUp;
  $scope.return = _return;

  function signUp() {
    if ($scope.username && $scope.email && $scope.password) {
      var newUser = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password,
        nom: $scope.nom,
        prenom: $scope.prenom,
        age: $scope.age
      };

      $http.post('http://localhost:3000/create-account').then(
        function(response) {
          alert('Ton compte a bien été créé ! bienvenue tête de naze !');
        },
        function(response) {
          alert(response.data);
        }
      );
    }
    else {
      alert('Vous devez au moins fournir un identifiant et un mot de passe');
    }
  }

  function _return() {
    $state.go('home');
  }
});
