
var template = require( "./cabinetMedical.html" );
require( "./cabinetMedical.css" );



module.exports = function(modAngular) {

	// Enregistre Noyeau fonctionnelle
	var proxyNF = require( "../../NF/proxyNF.js")(modAngular);
	

	
	// function et injection declare les depondances 
	var controller = function(proxyNF){
		
		// Cette fonction sera appelée pour instancier un cabinet
		this.toto=444;
		
		//console.log("proxyNF dans controller :", proxyNF); 
		console.log("Avant getData");
		
		this.data={};

		var ctrl=this;
		
		// Promise
		proxyNF.getData(this.src).then( function(data){
			ctrl.data =data;
			console.log("On a getData");
		});
		
		
		console.log("Aprés getData");
		
	 }
	 controller.$inject=[proxyNF]; // Injection de dépendances
									// atrribut inject  egale a un tableau qui a plusieur fonction 
	 
	 
     //Definire un composent 
	 modAngular.component("cabinetMedical", {
				template : template, //Le contenue html injecte par andugar quand il vois la balise dans html 
				controller : controller, // inancier l'objet  puis sinconisation avec l'objet et la balise html
				bindings : {
						titre: "@", //@ chaine de caractere simple 
						src: "@"
					
				}
				

		});
	
};//Fin function



