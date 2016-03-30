var EventManager = require( "./EventManager.js" );

function Chose(listeNF, texte) {
	this.listeNF 	= listeNF;
	this.texte		= texte;
	this.date		= Date.now();
	this.fait		= false;

	this.initEventManager();
}

Chose.prototype 			= Object.create( {} );
Chose.prototype.constructor	= Chose;

EventManager(Chose.prototype);

Chose.prototype.setTexte	= function(texte) {
	var ancien 	= this.texte;
	this.texte 	= texte;
	this.emit("update", {attribute: 'texte', old: ancien, new: texte});
}

Chose.prototype.setFait		= function(fait) {
	var ancien 	= this.fait;
	this.fait 	= fait;
	this.emit("update", {attribute: 'fait', old: ancien, new: fait});
}


Chose.prototype.dispose		= function() {
	this.listeNF.Retirer( this );
	this.disposeEventManager();
}

module.exports = Chose;