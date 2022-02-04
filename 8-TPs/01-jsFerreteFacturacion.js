w/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var texto;

	precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    resultado = precioUno + precioDos + precioTres;

    texto ="la suma es " + resultado;

    alert(texto);

	
}


function Promedio () 
{
   var precioUno;
   var precioDos;
   var precioTres;
   var suma;
   var promedio;

   precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    suma = (precioUno + precioDos + precioTres);
    promedio = suma / 3;
    texto = "El promedio es " + promedio; 

    alert(texto);
	
}
function PrecioFinal () 
{
	
}