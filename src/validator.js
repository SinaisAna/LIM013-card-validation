const validator = {
  // ...
  isValid: function(creditCardNumber){
    var suma= 0;
    for(var i = 0;i<creditCardNumber.length; i++){
      var digito =parseInt(creditCardNumber[i]);
      
        
      if((i+1)%2!=0){
        
        digito=digito*2;
        if(digito>9){ 
          let digito1 = parseInt(digito/10);
          let digito2 = digito%10;
          digito=digito1+digito2;
          
        }
        
      }
      suma=suma+digito;
      
    }
  if (suma%10==0){
      return true;
    } else{
      return false;
    } 
  },


maskify: function(creditCardNumber){
  var longitudNumero=creditCardNumber.length;
  var resultado="";
  if(longitudNumero>4){
    for(var i = 0;i<creditCardNumber.length; i++){
              
      if(i>=creditCardNumber.length-4){
        resultado+=creditCardNumber[i];
      }else{
        resultado+="#";
      }
    }

  }else{
    resultado=creditCardNumber
  }
  return resultado;
}


}
 export default validator;

