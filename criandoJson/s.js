const url = "https://reqres.in/api/users?per_page=10";
let response;
let data;
let json;

async function fetchExample() {
  try {
    response = await fetch(url);
    data = await response.json();
    json = JSON.stringify(data);
    return { data, json };
  } catch (error) {
    console.error(error);
  }
}

// chamando a função para preencher as variáveis globais
fetchExample();

// agora as variáveis data e json podem ser acessadas de qualquer lugar do código
console.log(data);
console.log(json);