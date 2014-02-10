'use strict';

/* Directives */

var siteGenDirectives = angular.module('siteGenDirectives', []);

// Directive: sgSearchForm
    // sends user request to appropriate services after submission
    // bonus: after submit, hide button and switch input to <a> with hover state; user can click to reenable input and search again

// Directive: sgImage
    // reads search term from scope
    // takes target parameter "background" or "content"
    // gets random image from photo/illustration API and either sets as background or injects <img> tag with src
    // bonus: smart adaptation of image to screen size

// Directive: sgIconHeader
    // reads search term from scope
    // gets random icon from nounProject API and sets as background on :before element

// Directive: sgLipsum
    // takes parameter of lipsum type (e.g. basic, hipster, jurassic)
    // retrieves lipsum from appropriate API, or defaults to basic if not recognized
    // prints out lipsum with html formatting