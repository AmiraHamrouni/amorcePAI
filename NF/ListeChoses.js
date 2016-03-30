var EventManager = require( "./EventManager.js" )
  , Chose		 = require( "./Chose.js" )
  ;

function ListeChoses() {
	this.choses 	= [];
	this.initEventManager();
}

ListeChoses.prototype 				= Object.create( {} );
ListeChoses.prototype.constructor	= ListeChoses;

EventManager(ListeChoses.prototype);

ListeChoses.prototype.Ajouter		= function(texte) {
	var chose = new Chose(this, texte);
	this.choses.push( chose );
	this.emit("update", {action: 'Ajouter', chose: chose});
}

ListeChoses.prototype.Retirer		= function(data) {
	var pos, chose;
	switch(data.constructor) {
		case Chose:
			pos = this.choses.indexOf(data);
		break;
		case String:
			pos = -1;
			this.choses.findIndex( function(chose) {return chose.texte === data;} );
		break;
		case Number:
			pos = data;
		break;
		default:
			throw( "Unknown data type for ListeChoses.prototype.Retirer" );
	}
	if( pos >= 0 && pos < this.choses.length) {
		chose = this.choses[pos];
		this.choses.splice(pos, 1);
		chose.dispose();
		this.emit("update", {action: 'Retirer', chose: chose});
	}
}

module.exports = ListeChoses;