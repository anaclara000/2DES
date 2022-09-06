function VerificarCPF(strCpf) {

    var soma;
    var resto;
    soma = 0;
    if (strCpf == "00000000000") {
        return false;
    }
    
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(9, 10))) {
        return false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(10, 11))) {
        return false;
    }
    
    return true;
    }

    function validarPlaca(placa){
        var resposta = false;
            const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
            if(regexPlaca.test(placa)){
                 resposta = true;
                }
            return resposta;
       }

// function gerarTelefones(quantidade,ddd){
    // var tamanho = 4
    // var tamanho1 = 4
    // var n1 = '1234567890'
    // var n = '9876543210'

    // //  var retorno = [];
    //     for(i = 0; i < tamanho; i++){
    //         for(j = 0; j < tamanho1; j++){
    //         // let telefone1 = Math.floor(Math.random()*10);
    //         // let telefone2 = Math.floor(Math.random()*10);
    //         // let telefone3 = Math.floor(Math.random()*10);
    //         // let telefone4 = Math.floor(Math.random()*10);
    //         // let telefone5 = Math.floor(Math.random()*10);
    //         // let telefone6 = Math.floor(Math.random()*10);
    //         // let telefone7 = Math.floor(Math.random()*10);
    //         // let telefone8 = Math.floor(Math.random()*10);
    //         var a = n1.charAt(Math.floor(Math.random()*n1.length))
    //         var b = n.charAt(Math.floor(Math.random()*n.length))
    //         console.log(a)

    //         // retorno[i] =  "(" + parseInt(ddd) + ")" + "9" + telefone1 + telefone2 + telefone3 + telefone4 + "-" + telefone5 + telefone6 + telefone7 + telefone8;
    //         } 
    //     }
    //     console.log(b)
   // }
//         return retorno;
// }

// function gerarCpf(qtd){
//     for(i = 0; i < parseInt(qtd); i++){
//         var num = Math.floor(Math.random()*10)
//     }

function gerarTelefones(quantidade,ddd){
    var retorno = [];
       for(i = 0; i < parseInt(quantidade); i++){
           const num1 = aleatorio2();
           const num2 = aleatorio2();

           retorno[i] =  `(${parseInt(ddd)}) 9${num1}-${num2}`;
           
       }
       return retorno;
}

function aleatorio2(){
    const alert = Math.floor(Math.random()*9999);
    return("" + alert).padStart(4, `0`);
}

function gerarCpf(qtd) {
    var retorno = [];
        for(i = 0; i < parseInt(qtd); i++){
            const num1 = aleatorio(); 
            const num2 = aleatorio();
            const num3 = aleatorio();

            const dig1 = dig(num1, num2, num3); 
            const dig2 = dig(num1, num2, num3, dig1); 
                    retorno[i] = `${num1}.${num2}.${num3}-${dig1}${dig2}`;
                }

  return retorno;
}


function dig(n1, n2, n3, n4) { 
  const nums = n1.split("").concat(n2.split(""), n3.split(""));
  
  if (n4 !== undefined){ 
    nums[9] = n4;
  }
  let x = 0;

  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  
  const y = x % 11;
  return y < 2 ? 0 : 11 - y; 
}

function aleatorio() {
  const aleat = Math.floor(Math.random() * 999);
  return ("" + aleat).padStart(3, '0'); 
}