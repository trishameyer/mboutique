/**
 * Created by trishameyer on 4/4/16.
 */
var routerApp = angular.module('routerApp', ["ui.router"]);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider

        .state('welcome', {
            url: '/welcome',
            templateUrl: 'templates/home.html',
            controller: 'welcomeController'
        })

        .state('our_macarons', {
            url: '/our_macarons',
            templateUrl: 'templates/our_macarons.html',
            controller: 'macaronsController'
        })

        .state('gifts_parties', {
            url: '/gifts_parties',
            templateUrl: 'templates/gifts_parties.html',
            controller: 'giftsController'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'contactController'
        })

});

routerApp.controller('welcomeController', function($scope){
    $scope.banner = 'assets/images/welcome-image.png';
}).controller('macaronsController', function($scope){
    $scope.banner = 'assets/images/our-macarons-image.png';
}).controller('giftsController', function($scope){
    $scope.banner = 'assets/images/gifts-parties-image.png';
}).controller('contactController', function($scope){
    $scope.banner = 'assets/images/contact-image.png';
});