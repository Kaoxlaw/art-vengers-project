angular.module('artVengers').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:'/home',
    templateUrl: 'home/home-view.html',
    controller: 'homeController'
  }),

  $urlRouterProvider.otherwise('/home');


  $stateProvider.state('create-account', {
    url:'/create-account',
    templateUrl: 'create-account/create-account-view.html',
    controller: 'createAccountController'
  })

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login-view.html',
    controller: 'loginController'
  })

  // .state('cart', {
  //   url: '/cart',
  //   templateUrl: 'cart-view.html',
  //   controller: 'cartController'
  // })
});
