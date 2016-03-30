// Framework Angular
var angular 			= require( "angular" 					)
  , angular-material	= require( "angular-material" 			)
  , angular-aria 		= require( "angular-aria" 				)
  , angular-animate		= require( "angular-animate" 			)
  ;


var mod = angualar.module( "bshm", ["angular-material"] );

require( "./js/ListeChoses.js" )(mod);
