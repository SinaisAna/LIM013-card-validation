const validator = {
  // ...
  isValid: function(creditCardNumber){
    let suma= 0;
    for(let i = 0;i<creditCardNumber.length; i++){
      let digito =parseInt(creditCardNumber[i]);
      
        
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
  const longitudNumero=creditCardNumber.length;
  let resultado="";
  if(longitudNumero>4){
    for(let i = 0;i<creditCardNumber.length; i++){
              
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

