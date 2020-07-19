import validator from './validator.js';

const ingresar=document.getElementById("ingresar");
ingresar.onclick=saludoMensaje;
const nombre="";

function saludoMensaje(){
	console.log("entro mensaje");
    let nombre=document.getElementById("nombre").value;
    if(nombre==""){
     	obigatorioNombre.innerHTML+="<p>Campo Obligatorio!</p>";
    }else{
	    document.getElementById('cabecera').classList.add('ocultar');
		let empecemos=document.getElementById("innert");
	    empecemos.innerHTML ='<h2>!Bien ' + nombre + ' por favor ingresa tu numero de tarjeta!</h2>'+ empecemos.innerHTML;
	    //mensaje2();
	    document.getElementById("ingreso").classList.remove('ocultar');
	    const tarjeta=document.getElementById("botonValidar");
	    tarjeta.onclick=evaluacion;
	 }

}


function evaluacion(){
	
	let nombre=document.getElementById("nombre").value;
	let input=document.getElementById("numtarjeta").value;
	if(input==""){

	}else{


	    let resultados=validator.isValid(input);
		let modelosTarjeta="";
		console.log(resultados);
		let michis=validator.maskify(input);
		
		let inputTodo=document.getElementById("total");
		document.getElementById("numerico").classList.add('ocultar');
		
		//escribe la validacion si es valida o no
		let borrarBienvenida=document.getElementById("innert").classList.add('ocultar');
		 if(resultados==true){
		 	if(input[0]=="4"){
		 		document.getElementById("visa").classList.remove('ocultar');

		 		document.getElementById("numero-tarjeta1").innerHTML=michis;
		
				document.getElementById("nombre-tarjeta1").innerHTML=nombre;
				
		 	}else if(input[0]=="5" && (input[1]=="1" || input[1]=="2" || input[1]=="3" || input[1]=="4")){
				document.getElementById("master").classList.remove('ocultar');

		 		document.getElementById("numero-tarjeta2").innerHTML=michis;

				document.getElementById("nombre-tarjeta2").innerHTML=nombre;
				
		 	}
		 	inputTodo.classList.remove('resultado-rojo');

		 	inputTodo.classList.add('resultado-verde');

		 	inputTodo.innerHTML+="<p>Tu tarjeta es valida</p>";
		}else{
            inputTodo.classList.remove('resultado-verde');

		 	inputTodo.classList.add('resultado-rojo');

			inputTodo.innerHTML+="<p>"+michis+"</p>";

			inputTodo.innerHTML+="<p>Tu tarjeta NO es valida</p>";

		}
	const ultimo=document.getElementById("volver");
   ultimo.onclick=volver;
  document.getElementById("volver").classList.remove('ocultar');
	
}
  
  
}
function volver(){
	document.getElementById("visa").classList.add('ocultar');

	document.getElementById("master").classList.add('ocultar');

    document.getElementById("numerico").classList.remove('ocultar');

	let inputTodo=document.getElementById("total");
	inputTodo.innerHTML="<p></p>";
} 
//}