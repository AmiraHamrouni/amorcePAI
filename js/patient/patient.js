
var template = require( "./patient.html" );
require( "./patient.css" );

module.exports = function(modAngular) {
	
	// Enregistre Noyeau fonctionnelle
	var proxyNF = require( "../../NF/proxyNF.js")(modAngular);
	
	
	// function et injection declare les depondances 
	var controller = function(proxyNF){

	 }
	 controller.$inject=[proxyNF]; // Injection de dépendances
									// atrribut inject  egale a un tableau qui a plusieur fonction 

     //Definire un composent 
	 modAngular.component("patient", {
				template : template, //Le contenue html injecte par andugar quand il vois la balise dans html 
				controller : controller, // inancier l'objet  puis sinconisation avec l'objet et la balise html
				bindings : {
						data: "<" //@ chaine de caractere simple 
				}	

		});
	

		
};//Fin function