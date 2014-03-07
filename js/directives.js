'use strict';

/* Directives */

var siteGenDirectives = angular.module('siteGenDirectives', []);

siteGenDirectives.directive('liveHero', function() {
  return {
      restrict: 'E',
      templateUrl: 'templates/live-hero.html'
    };
});

siteGenDirectives.directive('liveIcon', function() {
  return {
      restrict: 'E',
      templateUrl: 'templates/live-icon.html'
    };
});

siteGenDirectives.directive('livePicture', function() {
  return {
      restrict: 'E',
      templateUrl: 'templates/live-picture.html'
    }
});

siteGenDirectives.directive('lipsum', function() {
  return {
      restrict: 'E',
      templateUrl: 'templates/lipsum.html'
    };
});