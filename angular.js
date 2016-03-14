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
           controller: 'macaronsController'
       })
       .when('/gifts-parties',{
           templateUrl: 'gifts-parties.html',
           controller: 'giftsController'
        })
       .when('/contact',{
           templateUrl: 'contact.html',
           controller: 'contactController'
       })
       .otherwise({
           redirectTo: '/'
       })
});

