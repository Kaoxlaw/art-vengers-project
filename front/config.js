angular.module('artVengers').config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  .state('home', {
    url:'/home',
    templateUrl: 'home/home-view.html',
    controller: 'homeController'
  }),

  $urlRouterProvider.otherwise('/home');
  
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
