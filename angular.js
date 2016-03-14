/**
 * Created by trishameyer on 3/14/16.
 */
var app = angular.module('mboutiqueApp', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when('/',{
            templateUrl: 'welcomePg.html',
            controller: 'mainController'
        })
       .when('/our-macarons', {
           templateUrl: 'out_macarons.html',
           controller: 'mainController'
       })
       .when('/gifts-parties',{
           templateUrl: 'gifts-parties.html',
           controller: 'mainController'
        })
       .when('/contact',{
           templateUrl: 'contact.html',
           controller: 'mainController'
       })
       .otherwise({
           redirectTo: '/'
       })
});

app.controller('mainController', function(){
   this.nav = [{
       title: 'WELCOME',
       loc: '#/'
   }, {
       title: 'OUR MACARONS',
       loc: '/our-macarons'
   }, {
       title: 'GIFTS &amp PARTIES',
       loc: '/gifts-parties'
   }, {
       title: 'CONTACT',
       loc: '/contact'
   }]
});

