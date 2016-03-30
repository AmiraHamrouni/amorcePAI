
// Framework Angular
var angular 		= require( "angular" 			)
  , angularMaterial	= require( "angular-material" 	)
  ;
require( "angular-material/angular-material.css" );


require( "./secretary.css" );

// Instantiate module
var modAng = angular.module( "cabinet", [ angularMaterial ] );

// Define a directive to deal with data
require( "./patient/patient.js" )(modAng);


// Define a directive to deal with data
require( "./infirmier/infirmiere.js" )(modAng);

// Define a directive to deal with data
require( "./cabinetMedical/cabinetMedical.js" )(modAng);
//Inclusion du service et des composents



