var EventManager = require( "./EventManager.js" );

function Patient(listeNF, texte) {
	this.listeNF 	= listeNF;
	this.name		= name;
	this.forname	= forname;
	this.sex	    = sex;
	this.numero     = numero;
	this.birthday	= Date.now();
	this.adressPatientFloor     = adress.patientFloor;
	this.adressStreet           = adress.street;
	this.adressPostalCode       = adress.postalCode;
	this.adressCity             = adress.city;

	this.initEventManager();
}

Patient.prototype 			= Object.create( {} );
Patient.prototype.constructor	= Patient;

EventManager(Patient.prototype);

Patient.prototype.setName	= function(name) {
	var ancien 	= this.name;
	this.name 	= name;
	this.emit("update", {attribute: 'name', old: ancien, new: name});
}

Patient.prototype.setForname	= function(forname) {
	var ancien 	 = this.forname;
	this.forname = forname;
	this.emit("update", {attribute: 'forname', old: ancien, new: forname});
}

Patient.prototype.setSex	= function(sex) {
	var ancien 	= this.sex;
	this.sex 	= sex;
	this.emit("update", {attribute: 'sex', old: ancien, new: sex});
}

Patient.prototype.setNumero	= function(numero) {
	var ancien 	= this.numero;
	this.numero 	= numero;
	this.emit("update", {attribute: 'numero', old: ancien, new: numero});
}

Patient.prototype.setAdressPatientFloor	= function(adressPatientFloor) {
	var ancien 	= this.adressPatientFloor;
	this.adressPatientFloor 	= adressPatientFloor;
	this.emit("update", {attribute: 'adress.patientFloor', old: ancien, new: adressPatientFloor});
}

Patient.prototype.setAdressStreet	= function(adressStreet) {
	var ancien 	= this.adressStreet;
	this.adressStreet 	= adressStreet;
	this.emit("update", {attribute: 'adress.street', old: ancien, new: adressStreet});
}

Patient.prototype.setAdressPostalCode 	= function(adressPostalCode) {
	var ancien 	= this.adressPostalCode ;
	this.adressPostalCode  	= adressPostalCode ;
	this.emit("update", {attribute: 'adress.postalCode', old: ancien, new: adressPostalCode});
	
Patient.prototype.setAdressCity 	= function(adressCity) {
	var ancien 	= this.adressCity ;
	this.adressCity  	= adressCity ;
	this.emit("update", {attribute: 'adress.city', old: ancien, new: adressStreet});
}

Patient.prototype.dispose		= function() {
	this.listeNF.Retirer( this );
	this.disposeEventManager();
}

module.exports = Patient;