// REQUESTE -  REQUISIÇÃO O QUE MANDAMOS
// RESPONSE -  RESPOSTA O QUE RECEBEMOS

const url = "https://reqres.in/api/users?per_page=10"
// FUNÇÃO PARA PEGAR OS ARQUIVOS JSON DE UMA API
function pegarAPI(url){
  // o fethe retorne uma promessa ou seja se a requisição deu certo ou não;
  // .then - se traduz DEPOIS ou seja depois da requisição o que fazer depois, nesse caso podemos usar uma arrow function

  // FETCH - ENVIA UMA REQUISIÇÃO E ESPERA UMA PROMESSA DE RESPOSTA
    fetch(url)
  
  /*
  ! obs: o uso das chaves na arrow function limida o uso da função , após a resposta não se usa as chaves pois, somente
  !o que tiver dentro da chave que será executado , então a função de resposta não colocamos as chaves ficando a sintex basica:
  todo: .then((resposta)=>resposta.json()) 
 * já no dados inclui a chave
  todo: .then((dados)=>{}) 
  */ 
 // .THEN - DEPOIS DE OBTER A RESPOSTA, IREMOS TRANSFORMAR A RESPOSTA EM UM ARQUIVO JSON
    .then((resposta)=>resposta.json())
    // .THEN - DEPOIS DE OBTER O ARQUIVO JSON, IREMOS TRANSFORMAR EM UM OBJETO
    .then((dados) =>{
    
    var json = JSON.stringify(dados)
    console.log(json)
    var objeto = JSON.parse(json)
    // console.log(objeto)
    return objeto
 
    })
     
  
  }
  // pegarAPI(url)

 
  //.THEN - DEPOIS TRANSFORMAR O ARQUIVO EM JSON , PEGAMOS OS ARQUIVOS ( DADOS ) DA REQUISIÇÃO
  // NESSE MOMENTO CRIAMOS UMA FUNÇÃO PARA REALIZAMOS UMA AÇÃO ( ARROW FUNCTION)
  
    
    
    //PEGANDO O LEMENTO NO DOM - ListaParaPreenchida
    //const list = document.querySelector("#ListaParaPreenchida")
    // REALIZAR UM MAP OU SEJA UMA INTERAÇÃO PARA PEGAR CADA ELEMENTO( DADOS OBTIDOS NA REQUISIÇÃO)
    // dados.map(()=>{
    //   const li = document.createElement("li");

    
  
    

    
    
    //Mostra na console
   
    //Mostra no Página
 
    // transformar a resposta 


  


