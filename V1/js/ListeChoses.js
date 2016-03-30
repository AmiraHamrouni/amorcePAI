// Noyau fonctionnel
require( "../../NF/ListeChoses.js"	);
require( "./liste.css" );

// Template HTML
var template 	= require( "./bshmListe.html" );

var Chose = require( "./Chose.js" );
 
 // Définition du composant
module.exports = function(mod) {
	Chose(mod);
	mod.component( "bshmListe", {
		template	: template,
		bindings	: {nf: '<'},
		controller	: function() {
			this.texteChose = "";
			this.choses 	= this.nf.choses;
			this.Ajouter	= function(texte) {
				this.nf.Ajouter(texte);
				this.texteChose = "";
			}
		}
	});
}
