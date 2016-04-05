/**
 * Created by trishameyer on 4/4/16.
 */
var routerApp = angular.module('routerApp', ["ui.router"]);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider

        .state('welcome', {
            url: '/welcome',
            templateUrl: 'templates/home.html'
            //controller: 'logInController'
        })

        .state('our_macarons', {
            url: '/our_macarons',
            templateUrl: 'templates/our_macarons.html'
            //controller: 'signupController'
        })

        .state('gifts_parties', {
            url: '/gifts_parties',
            templateUrl: 'templates/gifts_parties.html'
            //controller: 'newsFeedController'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
            //controller: 'profilePageController'
        })

});