function calculerImc() {

	let taille=  document.getElementById("taille").value;

	let poids = document.getElementById("poids").value;

	let IMC = poids/Math.pow(taille,2);


	if(IMC <= 18.5){
			alert(IMC + " Insuffisance pondérale (maigreur)");
	}
	else if(IMC > 18.5 && IMC <= 25 ){

			alert(IMC + " Corpulence normale");
	}
	 else if(IMC > 25 && IMC <= 30){
		alert(IMC + " Surpoids");

	}
	 else if(IMC > 30 && IMC <= 35){
		alert(IMC + " Obésité modérée");

	}
	 else if(IMC > 35 && IMC <= 40){
		alert(IMC + " Obésité sévère");

	}
	else{

		alert(IMC + " Obésité sévère");
	}




}
