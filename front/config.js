angular.module('artVengers').config(function($stateProvider, $urlRouteProvider) {

  $urlRouteProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url:'/home',
    templateUrl: 'home-view.html',
    // controller: 'homeController'
  })
  //
  // .state('create-account', {
  //   url:'/create-account',
  //   templateUrl: 'create-acount.html',
  //   controller: 'createAccountController'
  // })
  //
  // .state('cart', {
  //   url: '/cart',
  //   templateUrl: 'cart-view.html',
  //   controller: 'cartController'
  // })
});
