// Noyau fonctionnel
require( "../../NF/Chose.js"	);

// Template HTML
var template 	= require( "./bshmChose.html" );
 
 // Définition du composant
module.exports = function(mod) {
	mod.component( "bshmChose", {
		template	: template,
		bindings	: {nf: '<'},
		controller	: function() {
			this.editable	= false;
			this.basculerEdition	= function(event) {
				if(event) {event.stopPropagation();}
				if(this.nf.fait === false) {
					this.editable = !this.editable;
				} else {this.editable = false;}
			}
			this.dispose	= function(event) {
				if(event) {event.stopPropagation();}
				this.nf.dispose();
			}
		}
	});
}
