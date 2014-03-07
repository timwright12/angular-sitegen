'use strict';

/* App Module */

var siteGenApp = angular.module('siteGenApp', [
  'ngRoute',

  'siteGenControllers',
  'siteGenFilters',
  'siteGenServices'
]);

// application routing
siteGenApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'siteGenCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);