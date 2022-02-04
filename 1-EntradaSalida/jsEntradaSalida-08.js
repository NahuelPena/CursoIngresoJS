/*Nahuel Peña Div Z
Ejercicio E/S 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  
	var dividiendo; 
	var divisor;
	var resultado;

	dividiendo = document.getElementById("txtIdNumeroDividendo").value;
	dividiendo = parseInt(dividiendo);

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseInt(divisor);

	resultado = dividiendo % divisor

	alert("La resta es " + resultado);
}
