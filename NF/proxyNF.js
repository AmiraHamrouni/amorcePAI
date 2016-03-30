
var proxyNF = function($http) {
	
	console.log("Le service proxyNF est intanciée !!! ");
	
    // Ajoutez le code de construction du service
    // Cette fonction sera appelée pour instancier un objet service

	 this.getData = function(src){

			// Utilisez $http pour télécharger la base de données
			return  $http.get ( src ).then( processData);
			
	 };
			
			
			
			
	 function processData (response) {
			
			var cabinet = {
		      patientsNomAffectes:[],
			  infirmies:{}
	        };
						//	console.log(response);

							var parser = new DOMParser();
							var doc = parser.parseFromString(response.data, "text/xml");

			
							var infirmier ;//{nom:"",prenom:"",photo:"",id:""};
							var infirmiersXML=doc.querySelectorAll('infirmier');
							var infirmierXML;
	  
							for(var i = 0; i < infirmiersXML.length; i++){
		  
									infirmierXML=infirmiersXML[i];
			 
									infirmier={
											nom:infirmierXML.querySelector("nom").textContent,
											prenom:infirmierXML.querySelector("prenom").textContent,
											photo:infirmierXML.querySelector("photo").textContent,
											id:infirmierXML.getAttribute("id"),
											patients:[] 
										};
				
									cabinet.infirmies[infirmier.id]=infirmier;
									// console.log(" infirmier :" , infirmier);
							}
							//console.log(cabinet.infirmies);
		
							var patient; // {nom:"",prenom:"",sexe:"",naissance:"",numero:"",intervenant:""};
							var patientsXML=doc.querySelectorAll('patient');
							var patientXML;
							var adresseXML;
		
							for(i = 0; i < patientsXML.length; i++){
		  
								patientXML=patientsXML[i];
			 
								patient={
										nom:patientXML.querySelector("nom").textContent,
										prenom:patientXML.querySelector("prenom").textContent,
										sexe:patientXML.querySelector("sexe").textContent,
										naissance:patientXML.querySelector("naissance").textContent,
										numero:patientXML.querySelector("numero").textContent,
										adresse:{}
										//intervenant:null
								};
			
								// recherche adresse
								adresseXML=patientXML.querySelector("adresse");
								patient.adresse={
									rue:adresseXML.querySelector("rue").textContent,
									ville:adresseXML.querySelector("ville").textContent,
									codePostal:adresseXML.querySelector("codePostal").textContent,
								};
								//pas tous les patient ont un numero et un etage dans leurs adresse
								if(adresseXML.querySelector("numero")!==null){
									patient.adresse.numero=adresseXML.querySelector("numero").textContent;
								};
								if(adresseXML.querySelector("etage")!==null){
									patient.adresse.etage=adresseXML.querySelector("etage").textContent;
								};
			
								// recherche intervenant sur patient
								var visit = patientXML.querySelector("visite[intervenant]");
								var id;

								if(visit===null || visit.getAttribute("intervenant")===""){
									cabinet.patientsNomAffectes.push(patient);
								} else {
				
									patient.intervenant=visit.getAttribute("intervenant"); //ajouter l'intervenant a l'objet patient cree
									id=visit.getAttribute("intervenant");
									cabinet.infirmies[id].patients.push(patient);
				
								}
			 			 

							} //Fin for patientsXML
		
		
							console.log(cabinet);
							return cabinet;
		    
		    } ;
		

		 
   
}
proxyNF.$inject = [ "$http" ]; // Injection de dépendances

module.exports = function(modAngular) {
    var idService = "proxyNF";
    modAngular.service(idService, proxyNF);
    return idService;
};

/*



utils.XHR('GET','/data/cabinetInfirmier.xml').then( 
function(xhm) {
	
	  console.log("xhm:", xhm);
	  
	  var parser = new DOMParser();
      var doc = parser.parseFromString(xhm.responseText, "text/xml");
    
	  var infirmier ;//{nom:"",prenom:"",photo:"",id:""};
	  var infirmiersXML=doc.querySelectorAll('infirmier');
	  var infirmierXML;
	  
	  for(var i = 0; i < infirmiersXML.length; i++){
		  
		     infirmierXML=infirmiersXML[i];
			 
		     infirmier={
			            nom:infirmierXML.querySelector("nom").textContent,
			            prenom:infirmierXML.querySelector("prenom").textContent,
			            photo:infirmierXML.querySelector("photo").textContent,
			            id:infirmierXML.getAttribute("id"),
						patients:[] 
		        };
				
		     cabinet.infirmies[infirmier.id]=infirmier;
			// console.log(" infirmier :" , infirmier);
	    }
	    //console.log(cabinet.infirmies);
		
	    var patient; // {nom:"",prenom:"",sexe:"",naissance:"",numero:"",intervenant:""};
		var patientsXML=doc.querySelectorAll('patient');
		var patientXML;
		var adresseXML;
		
		for(i = 0; i < patientsXML.length; i++){
		  
		     patientXML=patientsXML[i];
			 
		     patient={
			            nom:patientXML.querySelector("nom").textContent,
			            prenom:patientXML.querySelector("prenom").textContent,
			            sexe:patientXML.querySelector("sexe").textContent,
						naissance:patientXML.querySelector("naissance").textContent,
						numero:patientXML.querySelector("numero").textContent,
						adresse:{}
			            //intervenant:null
		        };
			
			// recherche adresse
             adresseXML=patientXML.querySelector("adresse");
			 patient.adresse={
				 rue:adresseXML.querySelector("rue").textContent,
				 ville:adresseXML.querySelector("ville").textContent,
				 codePostal:adresseXML.querySelector("codePostal").textContent,
			 };
			 //pas tous les patient ont un numero et un etage dans leurs adresse
			 if(adresseXML.querySelector("numero")!==null){
				 patient.adresse.numero=adresseXML.querySelector("numero").textContent;
			 };
			 if(adresseXML.querySelector("etage")!==null){
				 patient.adresse.etage=adresseXML.querySelector("etage").textContent;
			 };
			
			// recherche intervenant sur patient
			var visit = patientXML.querySelector("visite[intervenant]");
			var id;

			if(visit===null || visit.getAttribute("intervenant")===""){
				cabinet.patientsNomAffectes.push(patient);
			} else {
				
				patient.intervenant=visit.getAttribute("intervenant"); //ajouter l'intervenant a l'objet patient cree
				id=visit.getAttribute("intervenant");
				cabinet.infirmies[id].patients.push(patient);
				
			}
			 			 

	    }
		
		
		console.log(cabinet);

	
    } 
);

*/