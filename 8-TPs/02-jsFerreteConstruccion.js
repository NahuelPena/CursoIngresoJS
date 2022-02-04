/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo()
{   
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    let cantidadAlambre;
    let texto;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;
    alambre = 3;
    cantidadAlambre = perimetro * alambre;
    texto = "la cantida necesaria es de " + cantidadAlambre ;

    alert(texto);  
}
function Circulo () 
{
    let radioTerreno;
    let alambre;
    let resultado;
    let PI = 3.14;
    let cantidadAlambre;
    let texto;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseFloat(radioTerreno);

    resultado = 2 * PI * radioTerreno;

    alambre = 3;

    cantidadAlambre = alambre * resultado;

    texto = "La cantidad de alambre que necesitas es ";

    alert(texto + cantidadAlambre);
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
	var cantidadBolsaCemento;
	var cantidadBolsaCal;
	var texto;

	cemento = 2;
	cal = 3;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cantidadBolsaCemento = cemento * area;
	cantidadBolsaCal = cal * area;

	texto = "Para  un contrapiso se necesitan " + cantidadBolsaCemento + " de cemento y " + cantidadBolsaCal + " bolsas de cal";

	alert(texto);
}

