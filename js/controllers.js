'use strict';

/* Controllers */

var siteGenControllers = angular.module('siteGenControllers', ['siteGenServices','siteGenDirectives']);

/*
  caputire the form input to start the serivce
*/

siteGenControllers.controller('siteGenCtrl', function ($scope, photoData, iconData, contentData) {
  
  var inputValue,
      query,
      icon;
  
  $scope.input = {
    noun: "weather"
  };
  
  $scope.icon = {};
  $scope.hero = {};
  $scope.pictures = [
    {},
    {},
    {}
  ];

  $scope.update = function(){
  
    clearTimeout(query);
  
    inputValue = $scope.input.noun.replace(/[&\/\\#,+!@^_()$~%.'":*?<>{}]/g, '');
    
    query = setTimeout(function() {
      
      photoData.getPhoto( inputValue, setPhotos );
      iconData.getIcon( inputValue, setIcon );
      contentData.getContent( inputValue, setContent );
      
    }, 500);
    
    var setIcon = function( data ) {
      $scope.icon.alt = data[0].alt;
      $scope.icon.src = data[0].src;
    }
    
    var setPhotos = function( data ) {
      var i;
      
      $scope.hero.alt = data[0].alt;
      $scope.hero.src = data[0].src;
      
      for(i=1;i<=3;i++){
        $scope.pictures[i-1].alt = data[i].alt;
        $scope.pictures[i-1].src = data[i].src;
      }
      
    }
    
    var setContent = function( data ) {
      $scope.text = data;
    }
    
    console.log($scope.pictures);
    
  } // update
  

});