const url = "https://reqres.in/api/users?per_page=10"
let resposta;
let objeto;
let json;

async function ConsumirAPI() {
    try {
      resposta =  await  fetch(url)
      objeto =  await  resposta.json()
      //console.log("Objeto da função ConsumirAPI",objeto)
      json = JSON.stringify(objeto)
      //console.log("json da função ConsumirAPI",json)
      return ({objeto, json});      
    } catch (error) {
      console.log(error)   
    }
  }
  




//   ConsumirAPI().then(objeto => console.log(objeto));
  ConsumirAPI().then(resultado => {

    console.log(resultado.json)
    console.log(resultado.objeto)
  })

// async function printData() {
//     json = await fetchExample();
//     return JSON.stringify(json)
// }









