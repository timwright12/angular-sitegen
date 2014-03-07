'use strict';

/* Services */

var siteGenServices = angular.module('siteGenServices', ['ngResource']);

siteGenServices.factory('iconData', function( $http, $q ) {
  
  return {
    getIcon: function( noun, callback ) {
      
      var apiUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fthenounproject.com%2Fsearch%2F%3Fq%3D" + noun + "%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22search-results-container%22%5D%2Fol%2Fli%2Fa%2Fimg'&format=json";
      
      $http.get(apiUrl).success(function (data) {
        
        console.log('Noun Project returned OK');
        
        if(data.query.count > 0) {
          callback( data.query.results.img );
        } else {
          callback ([{
            src : "images/icon-error.png",
            alt : "Error"
          }]);
        }
        
      });
      
    }
  }
  
});

siteGenServices.factory('photoData', function($http, $q) {
  
  return {
    getPhoto: function( noun, callback ) {
    
      var flickrAPIKey = '88c626c0707757d87683ed3ecd4d26da';
      var flickrAPIsecret = 'bb0d6b0138b8448b';
      var deferred = $q.defer();
      var apiUrl = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrAPIKey + '&tags=' + noun + '&format=json&nojsoncallback=1&sort=interestingness-desc';
      var returnArray = [];
      
      $http.get(apiUrl).success(function (data) {
        
        console.log('Flickr returned OK');
        
        var item = data.photos.photo;
        var itemCount = data.photos.photo.length;

        if ( itemCount > 0 ) {

          for (var i = 0; i < itemCount; i = i + 1) {
            
            //console.log(obj);
            
            var obj = item[i];
            var alt = obj.title;
            var src = 'http://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '.jpg';
            
            //         http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            
            var objImage = {
                src:  src,
                alt: alt
            };
            
            returnArray.push(objImage);
          } // loop
          
          callback( returnArray );
          
        } else { // if > 0
          
          returnArray = [{
            src: 'images/hero.jpg',
            alt: 'pretty mountain'
          },{
            src: 'http://placehold.it/600x250',
            alt: 'placeholder image'
          },{
            src: 'http://placehold.it/600x250',
            alt: 'placeholder image'
          },{
            src: 'http://placehold.it/600x250',
            alt: 'placeholder image'
          }];
          
          callback( returnArray );
          
        } // else
      });
    }
  }
  
  
});

siteGenServices.factory('contentData', function($http, $q) {
  
  return {
    getContent: function( noun, callback ) {
      
      var apiUrl = 'http://hipsterjesus.com/api/?paras=1';
      
      $http.get(apiUrl).success(function (data) {
        
        var text = data.text;
        var text = text.replace(/(<([^>]+)>)/ig,"");
        var text = text.substring(0, 200);

        callback( text );
      });
      
    }
  }
  
});