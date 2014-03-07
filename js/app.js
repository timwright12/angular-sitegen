'use strict';

/* App Module */

var siteGenApp = angular.module('siteGenApp', [
  'ngRoute',

  'siteGenControllers',
  'siteGenFilters',
  'siteGenServices',
  'siteGenDirectives'
]);

// application routing
siteGenApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/angular-sitegen/', {
        templateUrl: 'partials/home.html',
        controller: 'siteGenCtrl'
      }).
      otherwise({
        redirectTo: '/angular-sitegen/'
      });
  }]);