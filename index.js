
function calculate(){
	var forces = document.getElementById('forces').value;
	var angles = document.getElementById('angles').value;
	
	var forceArray = forces.split(",").map(function(el){
		return parseInt(el);
	});
	var angleArray = angles.split(",").map(function(el){
		return parseInt(el);
	});

	var size = forceArray.length;
	var Fx=0;
	var Fy=0;
	var Resultant;
	var theta;
	for(i=0; i<size ; i++){
		Fx+=forceArray[i]*(Math.cos(angleArray[i]*(Math.PI)/180));
	}
	for(i=0; i<size ; i++){
		Fy+=forceArray[i]*(Math.sin(angleArray[i]*(Math.PI)/180));
	}
	Resultant=Math.sqrt(Math.pow(Fx,2)+Math.pow(Fy,2));
	theta =Math.atan(Fy/Fx);

	document.write("Fx = ",Fx,"<br>");
	document.write("Fy = ",Fy,"<br>");
	document.write("Resultant = ",Resultant,"<br>");
	document.write("Resultant theta = ",theta,"<br>");
}
