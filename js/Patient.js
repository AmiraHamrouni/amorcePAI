// Noyau fonctionnel
require( "../../NF/Patient.js"	);

// Template HTML
var template 	= require( "./secretary.html" );
 
 // Définition du composant
module.exports = function(mod) {
	mod.component( "secretaryDCISS", {
		template	: template,
		bindings	: {nf: '<'},
		controller	: function() {
			this.editable	= false;
			this.basculerEdition	= function() {
				if(event) {event.stopPropagation();}
				
				// a change 
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
