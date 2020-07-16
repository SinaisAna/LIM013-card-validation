import validator from './validator.js';

const ingresar=document.getElementById("ingresar");
ingresar.onclick=saludoMensaje;


function saludoMensaje(){
	console.log("entro mensaje");
    let nombre=document.getElementById("nombre").value;
    if(nombre==""){
     obigatorioNombre.innerHTML+="<p>Campo Obligatorio!</p>";
    }else{
    document.getElementById('cabecera').classList.add('ocultar');
	let empecemos=document.getElementById("ingreso");
    empecemos.innerHTML ='<h2>!Bien ' + nombre + ' por favor ingresa tu numero de tarjeta!</h2>'+ empecemos.innerHTML;
    //mensaje2();
    document.getElementById("ingreso").classList.remove('ocultar');
    const tarjeta=document.getElementById("botonValidar");
    tarjeta.onclick=evaluacion;
 }

}
//function mensaje2(){


function evaluacion(){
	console.log("holaaa");
	let input=document.getElementById("numtarjeta").value;
	  if(input==""){
   obligatorioTarjeta.innerHTML+="<p>Campo Obligatorio!</p>";
    }else{
    let resultados=validator.isValid(input);
	let modelosTarjeta="";
	if(input[0]=="4"){
      modelosTarjeta="VISA";
}else if(input[0]=="5" && (input[1]=="1" || input[1]=="2" || input[1]=="3" || input[1]=="4")){
  modelosTarjeta="MASTERCARD";
   }
	console.log(resultados);
	let michis=validator.maskify(input);
	//console.log(input);
	let inputTodo=document.getElementById("total");
	inputTodo.innerHTML+="<p>"+michis+"</p>";
	//escribe la validacion si es valida o no
	 if(resultados==true){
	 	inputTodo.innerHTML+="<p>tu tarjeta es valida" + modelosTarjeta+ "</p>";
	}else{
		inputTodo.innerHTML+="<p>tu tarjeta no es valida</p>";
	}

  }
} 
//}