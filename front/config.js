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

  $stateProvider.state('matthieu',{
    url: '/matthieu',
    templateUrl: 'matthieu/matthieu-view.html',
    controller: 'matthieuController'
  });

    $stateProvider.state('karim',{
    url: '/karim',
    templateUrl: 'karim/karim-view.html',
    controller: 'karimController'
  });

      $stateProvider.state('kao',{
    url: '/kao',
    templateUrl: 'kao/kao-view.html',
    controller: 'kaoController'
  });

        $stateProvider.state('jeremy',{
    url: '/jeremy',
    templateUrl: 'jeremy/jeremy-view.html',
    controller: 'jeremyController'
  });

        $stateProvider.state('checkout',{
    url: '/checkout',
    templateUrl: 'checkout/checkout-view.html',
    controller: 'checkoutController'
  });

  $urlRouterProvider.otherwise('/home');
});
