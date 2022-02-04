/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
{
	var temperaturaIngresada;
	var temperaturaCentigrados;
    
    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);
    
    temperaturaCentigrados = (((temperaturaIngresada - 32)*5)/9);
    temperaturaCentigrados = Math.round(temperaturaCentigrados); 

    alert(temperaturaIngresada + " Farenheit son " + temperaturaCentigrados + " Centigrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var temperaturaFahrenheit;
    var texto;
    
    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);
    
    temperaturaFahrenheit = ((temperaturaIngresada * 1.8)+ 32 );
    temperaturaFahrenheit = Math.round(temperaturaFahrenheit);

    texto = temperaturaIngresada + " centigrados son " + temperaturaFahrenheit + " Fahrenheit";
    alert (texto);
}