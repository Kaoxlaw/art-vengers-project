angular.module('artVengers').controller('createAccountController', function($scope, $state, $http) {

  $scope.signUp = _signUp;

  function _signUp() {
    if ($scope.email && $scope.password) {
      var newUser = {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        dateOfBirth: $scope.dateOfBirth,
        adress: $scope.adress,
        postCode: $scope.postCode,
        city: $scope.city,
        country: $scope.country,
        cellphone: $scope.cellphone,
        email: $scope.email,
        password: $scope.password,
      };

      $http.post('http://localhost:3000/signup', newUser).then(
        function(response) {
          alert('Votre compte a bien été créer ! bienvenue tête de naze !');
          $state.go('signin');
        },
        function(response) {
          alert(response.data);
        }
      );
    }
    else {
      alert('Vous devez au moins fournir un email et un mot de passe');
    }
  };
});
