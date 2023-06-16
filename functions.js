async function handleFormSubmit(nome, numero, produto){
  event.preventDefault();
          
  let texto = ""
  let checkbox = document.getElementById('boolBanca');
  let banca;

  let telefoneValidado = validPhone(numero)
      
      if (telefoneValidado){
                      
          if (checkbox.checked) {
  
              var codigoValido = false
  
              let codigo
  
              // while (codigoValido = false){
  
              //     codigoValido = validCode(codigo)
              //     return codigo
                  
              // }
              codigo = Math.floor(Math.random() * 10000)
              
              banca = true;
  
              texto = "Olá 👋, *" + nome +"*, tudo bem com o(a) senhor(a)?" +
                  "\nSeu pedido de um *" + produto +"*🍬 foi realizado com sucesso!" +
                  "\n\nO prazo para entrega, 🛵 é de 1(uma) hora, não esqueça de utilizar seu código para retirar seu pedido: *" + codigo + "*" ;

              alert("Seu pedido foi efetuado");
              
              // salvarDados(nome, numero, produto, codigo, banca)
              actionIntegra(texto, numero)
          } else {
              
              banca = false
  
              codigo = 0
              
              texto = "Olá 👋, *" + nome +"*, tudo bem com o(a) senhor(a)?" +
              "\nAgradecemos a sua contribuição com a nossa apresentação!" +
              "\n\nEmbora seja uma simples ação de compra dentro de um e-commerce, todo esse processo passou pela plataforma do Integra.Sky!";

              alert("Seu pedido foi efetuado");
              
              // salvarDados(nome, numero, produto, codigo, banca)
              actionIntegra(texto, numero)
          }
      } else {
          alert("Formato de telefone inválido, não é necessário colocar DDI, apenas DDD sem parênteses mais seu telefone seguido por 9 digitos sem traço");
      }
  // } else {
  //     alert("Agradecemos a preferência mas parece que o(a) senhor(a) já efetuou uma compra e estamos limitando a apenas um pedido por pessoa!")
  // }
  
          
}

function validPhone(phone) {
  var regex = new RegExp('^[0-9]{2}9[0-9]{8}$'); 
  return regex.test(phone);
}

function actionIntegra(texto, numero){
  console.log("---------------------")
  console.log("Enviando dados para o Integra")
  
  let data = {
      number: numero,
      message: texto
  }
  
  console.log(data)
  
  fetch('https://myspace.api.integrasky.cloud/RTZqajC3', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json"}
  })
  
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  console.log("---------------------")
}

