// Framework Angular
var angular 		= require( "angular" 			)
  , angularMaterial	= require( "angular-material" 	)
  , angularAria 	= require( "angular-aria" 		)
  , angularAnimate	= require( "angular-animate" 	)
  ;
require( "angular-material/angular-material.css" );


// Instantiate module
var mod = angular.module( "bshm", ["ngMaterial"] );

// Define a directive to deal with data
var ListeChoses = require( "../NF/ListeChoses.js" );
mod.directive( "bshmRoot", function() {return {
	restrict 		: 'A',
	bindToController: true,
	controllerAs	: "ctrl",
	controller 		: function() {
		this.hello = "hello";
		this.listeChoses = new ListeChoses();
	}
};})

// Load components
require( "./js/ListeChoses.js" )(mod);
