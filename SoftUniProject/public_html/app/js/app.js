var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newAd', {
            templateUrl: 'templates/newAd.html',
            controller: 'NewAdController'
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/allAds.html',
            controller: 'AllAdsController'
        });
        $routeProvider.when('/ads/:adId', {
            templateUrl: 'templates/adDetails.html',
            controller: 'AdDetailsController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        });
        $routeProvider.when('/user/home', {
            templateUrl: 'templates/user/home.html',
            controller: 'AllAdsController'
        });
        $routeProvider.when('/user/ads', {
            templateUrl: 'templates/user/ads.html',
            controller: 'UserAdsController'
        });
        $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/user/ads/publish.html',
            controller: 'NewAdController'
        });
        $routeProvider.when('/user/ads/edit', {
            templateUrl: 'templates/user/ads/edit.html',
            controller: 'EditAdController'
        });
    });


