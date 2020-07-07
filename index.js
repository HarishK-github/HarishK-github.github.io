
var forces = new Array();
var angle = new Array();
function addTo() {
   var i=0;
   forces(i).push(document.getElementById("Forces").value);
   angle(i).push(document.getElementById("Angle").value);
   i++;
   //to confirm it has been added to the array
}
var size = forces.length;


function ansOf(){
Resultant=0;
	for(i=0; i<size ; i++){
		Resultant+=forces(i);
		sum+=angle(i);
	}
	document.write(Resultant);
}
