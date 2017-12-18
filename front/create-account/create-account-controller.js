angular.module('artVengers').controller('createAccountController', function ($scope, $http) {

  $scope.sinUp = _signUp;

  $scope.signUp() {
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
          alert('Votre compte a bien été créer ! bienvenue tête de naze !');
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
});
