// function validCode(codigo){

//     var url = "https://localhost:7216/pedidos/codigo/" + codigo
    
    
//     fetch(url, {
//         method: 'GET',
//         headers: {"Content-type": "application/json"}
//     })
    
//     .then(data => {
//         return data.json();
//     })
    
//     .then(retorno => {
//         var respoBool = retorno
//         console.log("Retorno da API para o código é: " + respoBool)
//     })
//     .catch(error => console.log(error));

// }

// async function validUsuario(telefone){
//     return new Promise(async (resolve, reject) => {

//         const url = "https://localhost:7216/pedidos/telefone/" + telefone
    
//         let usuarioValidado;
            
//         await fetch(url, {
//             method: 'GET',
//             headers: {"Content-type": "application/json"}
//         })
        
//         .then(data => {
//             return data.json();
//         })
        
//         .then(retorno => {
//             usuarioValidado = retorno
//             console.log("Retorno da API para telefone é: " + usuarioValidado)
//             resolve(usuarioValidado)
//         })

//         .catch(error => {
//             console.log(error);
//             reject(error);
//         });
//     })
// }

async function handleFormSubmit(nome, numero, produto){
  event.preventDefault();
          
  let texto = ""
  let checkbox = document.getElementById('boolBanca');
  let banca;

  let telefoneValidado = validPhone(numero)

  // let usuarioValidado = await validUsuario(numero)
  // console.log("resultado: " , usuarioValidado)

  // if (usuarioValidado){
      
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

// function realizarEntrega(codigo){
  
//     console.log("Entrega iniciada!")

//     let data = {
//         codigo: codigo
//     }

//     console.log("código: " + data)

//     var url = 'https://localhost:7216/pedidos/pedido/' + codigo

//     fetch(url, {
//         method: 'GET',
//             headers: {"Content-type": "application/json"}
//     })

//     .then(res => res.json())
//     .then(data => {
//         console.log(data),
//         actionAPIComId(data.id, data.nome, data.numero, data.produto, data.codigo, data.banca)
//     })
//     .catch(error => console.log(error));
// }

function validPhone(phone) {
  var regex = new RegExp('^[0-9]{2}9[0-9]{8}$'); 
  return regex.test(phone);
}

// function salvarDados(nome, numero, produto, codigo, banca){

//     console.log("Iniciando gravação no banco de dados")

//     var codigoProduto;
//     var validaUsuario;

//     console.log(nome, numero, produto, codigo, banca)
  
//     if (banca){
      
//         validaUsuario = 1;
      
//         if (produto == "Sonho de Valsa"){

//             codigoProduto = 1;
          
//             actionAPI(nome, numero, codigoProduto, codigo, validaUsuario)

//         } else {

//             codigoProduto = 2;

//             actionAPI(nome, numero, codigoProduto, codigo, validaUsuario)

//         }

//     } else {

//         validaUsuario = 2;

//         if (produto == "Sonho de Valsa"){

//             codigoProduto = 1;

//             actionAPI(nome, numero, codigoProduto, codigo, validaUsuario)

//         } else {
          
//             codigoProduto = 2;

//             actionAPI(nome, numero, codigoProduto, codigo, validaUsuario)
          
//         }
//     }
//     console.log(nome, numero, produto, codigo, banca)
  
// }

// function actionAPIComId(id, nome, numero, produto, codigo, banca){

//     let data = {
//         id: id,
//         nomeCompleto: nome,
//         telefone: numero,
//         produto: produto,
//         status: 2,
//         codigo: codigo,
//         valido: banca
//     }

//     console.log(data)

//     fetch('https://localhost:7216/pedidos', {
//         method: 'PUT',
//             body: JSON.stringify(data),
//             headers: {"Content-type": "application/json"}
//     })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// }

// function actionAPI(nome, numero, produto, codigo, banca){

//     let data = {
//         nomeCompleto: nome,
//         telefone: numero,
//         produto: produto,
//         status: 1,
//         codigo: codigo,
//         valido: banca
//     }

//     console.log(data)

//     fetch('https://localhost:7216/pedidos', {
//         method: 'POST',
//             body: JSON.stringify(data),
//             headers: {"Content-type": "application/json"}
//     })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// }

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

// async function retornarTodosPedidosValidos(event) {
//     console.log("passou aqui " , event)
//     event.preventDefault()
//     return new Promise(async (resolve, reject) => {

//         const url = "https://localhost:7216/todos-pedidos";

//         let texto;
  
//         await fetch(url, {
//             method: 'GET',
//             headers: {"Content-type": "application/json"}
//         })
      
//         .then(data => {
//             return data.json();
//         })
      
//         .then(retorno => {
//             console.log(retorno);
          
//             for (let i = 0; i < retorno.length; i ++) {
//                 console.log(retorno[i])

//                 let produto;

//                 if (retorno[i].produto == 1) {
//                     produto = "Sonho de Valsa"
//                 } else {
//                     produto = "Ouro Branco"
//                 }

//                 texto = "Olá 👋, *" + retorno[i].nomeCompleto +"*, tudo bem com o(a) senhor(a)?" +
//                 "\nSeu pedido de um *" + produto +"*🍬 acaba de sair para entrega!!" +
//                 "\n\nO prazo para entrega, 🛵 é de 1(um) dia, não esqueça de utilizar seu código para retirar seu pedido: *" + retorno[i].codigo + "*" ;
          
//                 console.log("numero " , retorno[i].telefone)
//                 actionIntegra(retorno[i].telefone, texto)
//             }

//             resolve(retorno);
//         })

//         .catch(error => {
//             console.log(error);
//             reject(error);
//         });
//     })
// }