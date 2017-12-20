angular.module('artVengers').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:'/home',
    templateUrl: 'home/home-view.html',
    controller: 'homeController'
  });

  $stateProvider.state('signup', {
    url:'/signup',
    templateUrl: 'create-account/create-account-view.html',
    controller: 'createAccountController'
  });

  $stateProvider.state('signin', {
    url: '/signin',
    templateUrl: 'login/login-view.html',
    controller: 'loginController'
  });

  $stateProvider.state('cart', {
    url: '/cart',
    templateUrl: 'cart/cart-view.html',
    controller: 'cartController'
  });

  $urlRouterProvider.otherwise('/home');
});
