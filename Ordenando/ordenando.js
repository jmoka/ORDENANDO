const body=document.querySelector("body");

//==================================================================
//todo: RESULTADO ( ARRAY)
const saida = [];
const saidaElemento=document.createElement("div");
const saidaElementoListaOriginal=document.createElement("div");
const saidaElementoListaResultado=document.createElement("div");
const textSaidaRotulo=document.createElement("h4");
const textSaidarResultado=document.createElement("h4");
const textSaidaexplicacao=document.createElement("h4");
const textEntrada=document.createElement("h4");
const rotuloEntrada=document.createElement("h4");
rotuloEntrada.innerHTML = "Lista Original: "



// todo: Inserindo Elemento na div saida elemento
saidaElemento.appendChild(saidaElementoListaOriginal);
saidaElementoListaOriginal.appendChild(rotuloEntrada);
saidaElementoListaOriginal.appendChild(textEntrada);
saidaElemento.appendChild(saidaElementoListaResultado);
saidaElementoListaResultado.appendChild(textSaidaRotulo);
saidaElementoListaResultado.appendChild(textSaidarResultado);
saidaElemento.appendChild(textSaidaexplicacao);


//todo: ATRIBUTOS
saidaElemento.id="saidaElemento";
saidaElementoListaOriginal.id="saidaElementoListaOriginal"
textEntrada.id="textEntrada"
textSaidaRotulo.id="textSaidaRotulo"
saidaElementoListaResultado.id="saidaElementoListaResultado"
textSaidarResultado.id="textSaidarResultado"





// todo: CABEÇALHO
const cabecalho=document.createElement("div");
const textoCabecalho=document.createElement("h4");
textoCabecalho.innerHTML="Missão Prática | Nível 2 | Mundo 2";
cabecalho.appendChild(textoCabecalho);

//==========================================================================

// todo: ELEMENTO1 
const elemento1=document.createElement("div");
const textoElemento1=document.createElement("h4");
const inputElemento1 = document.createElement("input");
const btnAdicionar = document.createElement("button");
const btnOrdenar = document.createElement("button");
const btnEmbaralhar = document.createElement("button");
const btnLimpar = document.createElement("button");


//todo: Incluindo os Itens na DIV (elemento1)
elemento1.appendChild(textoElemento1);
elemento1.appendChild(inputElemento1);
elemento1.appendChild(btnAdicionar);
elemento1.appendChild(btnOrdenar);
elemento1.appendChild(btnEmbaralhar);
elemento1.appendChild(btnLimpar);


// todo: Adiciona o texto no botão e na Label Rotulo
btnAdicionar.innerHTML = "Incluir";
btnOrdenar.innerHTML="Ordenar";
btnEmbaralhar.innerHTML="Embaralhar";
btnLimpar.innerHTML="Limpar"
textoElemento1.innerHTML = `1 - Esse trabalho tem o objetivo de inserir um valor no campo informado e incluir em uma ARRAY.<br/>
2 - Enseguida escolher um dos métodos de ordenamento disponivel no "Rádios" abaixo.<br/> 
3 - Tem a opção de Embaralher e de Limpar`;
inputElemento1.placeholder="Digite o número aqui e aperte o  <ENTER>  ou o botão  <INCLUIR>  bem ao lado ===>"
inputElemento1.id="inputElemento1"


//! FUNÇÕES 

//TODO: Função ADICIONAR ELEMENTO na Array    
const adicionarElemento = () => {   
    let valorInserido = Number(inputElemento1.value);
    console.log(typeof valorInserido);

    if ( valorInserido!==Number(inputElemento1.value) || valorInserido=="" ){
        alert("Insira mais de um Número no campo abaixo");
        inputElemento1.value="";
        inputElemento1.focus();
    }else{
        saida.push(valorInserido);
        
        textEntrada.innerHTML= saida;
        inputElemento1.value="";
        inputElemento1.focus();     
    }
}

//TODO: Função ORDENAR UMA ARRAY  compareFunction na Array 
const compareFunction = (saida) => {
    return saida.sort((a, b) => a - b);
  }


//TODO: Função ORDENAR UMA ARRAY  Bubble-Sort na Array 
const bubbleSort = (array) => {
    let valorTrocado;
    do {
      valorTrocado = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          valorTrocado = true;
        }
      }
    } while (valorTrocado);
    return array;
  }

//TODO: Função ORDENAR UMA ARRAY-   selectionSort na Array 
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  }


//TODO: Função ORDENAR UMA ARRAY-   quickSort na Array 
const quickSort = (array, p, r) => {
    if (p < r) {
      const q = partition(array, p, r);
      quickSort(array, p, q - 1);
      quickSort(array, q + 1, r);
    }
    return array;
  }
  
  const partition = (array, p, r) => {
    const pivot = array[r];
    let i = p - 1;
    for (let j = p; j <= r - 1; j++) {
      if (array[j] < pivot) {
        i++;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    const temp = array[i + 1];
    array[i + 1] = array[r];
    array[r] = temp;
    return i + 1;
  }

//TODO: Função EMBARALHA UMA ARRAY-   shuffle na Array 
    const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
    }



//! BOTÕES
//todo: CLICK DOS BOTÕES

// * BOTÃO ADICIONAR
btnAdicionar.addEventListener("click",()=>{
    adicionarElemento();
});

//todo: ADICIONAR ELEMENTO USANDO O ENTER NO INPUT
inputElemento1.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {adicionarElemento()}
 
});

// * BOTÃO LIMPAR
btnLimpar.addEventListener("click",()=>{

  if(saida!==[] && saida.length<1){
    alert("Lista já se encontra vazia")
    inputElemento1.focus();
  }else{
    textSaidaRotulo.innerHTML="";
    textSaidarResultado.innerHTML = ""
    textSaidaexplicacao.innerHTML=""
    textEntrada.innerHTML=""
    botaoRadio1.checked = false;
    botaoRadio2.checked = false;
    botaoRadio3.checked = false;
    botaoRadio4.checked = false;
    botaoRadio5.checked = false;
    saida.splice(0,saida.length);

}

});


// * BOTÃO EMBARALHAR
btnEmbaralhar.addEventListener("click",()=>{
    if(saida!==[] && saida.length<2){
        alert("Lista vazia ou com somente um Número (Inclua mais de um número na lista)")
        inputElemento1.focus();
    }else{
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = shuffle(saida);
        textSaidaexplicacao.innerHTML=`<span class= "textTestaque">FEITO O EMBARALHAMENTO</span><br/><br/>

        <span class= "textTestaque">A FUNÇÃO SHUFFLE</span> recebe um array como parâmetro e tem como objetivo 
        reorganizar aleatoriamente a ordem dos elementos desse array.<br/><br/>
        
        <br/> <br/>SINTAX:<br/><br/>

        const shuffle = (array) => {<br/>
          for (let i = array.length - 1; i > 0; i--) {<br/>
          const j = Math.floor(Math.random() * (i + 1));<br/>
          const temp = array[i];<br/>
          array[i] = array[j];<br/>
          array[j] = temp;<br/>
          }<br/>
          return array;<br/>
          }<br/>
        
        `
    }

});

// * BOTÃO ORDENAR

btnOrdenar.addEventListener("click",()=>{ 

    if(botaoRadio1.checked == true && saida.length>1){
        textSaidarResultado.innerHTML = saida;
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = saida.sort();
        textSaidaexplicacao.innerHTML=`<span class="textTestaque">FUNÇÃO SORT NATIVA DO JS, ORDENA EM ORDEM ALFABÉTICA</span> (É usada para classificar os elementos de um array 
        em ordem crescente ou decrescente,<br/> com base em um critério específico, caso não seja especificado, ordena em ordem 
        alfabética)<br/><br/>SINTAX:<br/><br/> array.sort()`;
        
        
    }else if(botaoRadio2.checked == true && saida.length>1){
        textSaidarResultado.innerHTML = saida;
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = compareFunction(saida);
        textSaidaexplicacao.innerHTML=`<span class="textTestaque">COMPARE FUNCTION</span>  ordena uma array numericamente, A função "compareFunction" é uma função que deve receber dois parâmetros (a e b) e retornar um valor negativo se a deve ser 
        classificado antes de b, um valor positivo se b deve ser classificado antes de a, e 0 se a e b são considerados iguais em termos de ordenação.
        <br/> <br/>SINTAX:<br/><br/>  
        
        const compareFunction = (saida) => {<br/>  
            return saida.sort((a, b) => a - b);<br/>  
          }<br/>  `;

    }else if(botaoRadio3.checked == true && saida.length>1){
        textSaidarResultado.innerHTML = saida;
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = bubbleSort(saida);
        textSaidaexplicacao.innerHTML=`<span class="textTestaque">O BUBBLE SORT</span>  é um algoritmo de ordenação simples que percorre uma lista de elementos várias vezes, 
        comparando elementos adjacentes e trocando-os se estiverem na ordem errada. Esse processo continua até que a lista esteja completamente ordenada.
        <br/> <br/>SINTAX:<br/><br/> 
        
        const bubbleSort = (array) => {<br/> 
            let valorTrocado;<br/> 
            do {<br/> 
              valorTrocado = false;<br/> 
              for (let i = 0; i < array.length - 1; i++) {<br/> 
                if (array[i] > array[i + 1]) {<br/> 
                  const temp = array[i];<br/> 
                  array[i] = array[i + 1];<br/> 
                  array[i + 1] = temp;<br/> 
                  valorTrocado = true;<br/> 
                }<br/> 
              }<br/> 
            } while (valorTrocado);<br/> 
            return array;<br/> 
          }<br/> 
          `

    }else if(botaoRadio4.checked == true && saida.length>1){
        textSaidarResultado.innerHTML = saida;
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = quickSort(saida, 0, saida.length - 1);
        textSaidaexplicacao.innerHTML=`Uma função <span class="textTestaque">QUICK SORT</span>  é um algoritmo de ordenação que segue o paradigma 
        "dividir para conquistar". Essa função divide a matriz em duas partes, uma com elementos menores que um pivô 
        escolhido e outra com elementos maiores que o pivô. Em seguida, a função é chamada recursivamente em cada parte 
        até que a matriz esteja completamente ordenada.<br/><br/> 
        A função partition seleciona o pivô como o último elemento da matriz. O laço for percorre a matriz da posição 
        inicial p até a posição final r-1, comparando cada elemento com o pivô e trocando os elementos, se necessário, 
        para colocá-los em posições corretas. No final do laço, o pivô é trocado com o elemento imediatamente após o último 
        elemento menor do que o pivô encontrado.
        <br/> <br/>SINTAX:<br/><br/> 

        const quickSort = (array, p, r) => {<br/> 
            if (p < r) {<br/> 
              const q = partition(array, p, r);<br/> 
              quickSort(array, p, q - 1);<br/> 
              quickSort(array, q + 1, r);<br/> 
            }<br/> 
            return array;<br/> 
          }<br/> <br/> 
          
          const partition = (array, p, r) => {<br/> 
            const pivot = array[r];<br/> 
            let i = p - 1;<br/> 
            for (let j = p; j <= r - 1; j++) {<br/> 
              if (array[j] < pivot) {<br/> 
                i++;<br/> 
                const temp = array[i];<br/> 
                array[i] = array[j];<br/> 
                array[j] = temp;<br/> 
              }<br/> 
            }<br/> 
            const temp = array[i + 1];<br/> 
            array[i + 1] = array[r];<br/> 
            array[r] = temp;<br/> 
            return i + 1;<br/> 
          }<br/>`;
    
    }else if(botaoRadio5.checked == true && saida.length>1){
        textSaidarResultado.innerHTML = saida;
        textSaidaRotulo.innerHTML="Resultado: ";
        textSaidarResultado.innerHTML = selectionSort(saida);
        textSaidaexplicacao.innerHTML=`<span class="textTestaque">O SELECTION SORT</span>  é um algoritmo de ordenação simples e de fácil implementação. 
        Ele funciona da seguinte maneira:<br/> <br/> 

        Percorre todo o vetor a ser ordenado, buscando o menor elemento;<br/> 
        Troca o menor elemento encontrado com o primeiro elemento do vetor;<br/> 
        Repete o processo acima, mas agora ignorando o primeiro elemento do vetor já ordenado;<br/> 
        Continua repetindo os passos 1, 2 e 3 até que todo o vetor esteja ordenado.<br/> 
        Dessa forma, o Selection Sort sempre seleciona o menor elemento do vetor e o coloca na posição correta, 
        até que todo o vetor esteja ordenado.<br/><br/>
        
        const selectionSort = (array) => {<br/>
            for (let i = 0; i < array.length - 1; i++) {<br/>
              let minIndex = i;<br/>
              for (let j = i + 1; j < array.length; j++) {<br/>
                if (array[j] < array[minIndex]) {<br/>
                  minIndex = j;<br/>
                }<br/>
              }<br/>
              if (minIndex !== i) {<br/>
                const temp = array[i];<br/>
                array[i] = array[minIndex];<br/>
                array[minIndex] = temp;<br/>
              }<br/>
            }<br/>
            return array;<br/>
          }<br/>
        `        
    }else if(botaoRadio1.checked !== true  || botaoRadio2.checked !== true  || botaoRadio3.checked !== true  || botaoRadio4.checked !== true ){
        alert(`Opss... Algo de Errado !!
        1 - Verifique se você inseriu mais de um número na lista; 
        2 - Escolha uma das Opções, caso não esteja selecionada;`);
    }else{
        alert("Selecione uma Opção abaixo!!" )
       
    }
});



//==========================================================================

// todo: RADIOS  
const elementoRadio=document.createElement("div");
elementoRadio.setAttribute("id", "idRadio")

// elementoRadio.className = "classeRadio"
// elementoRadio.id="idRadio"

// RADIO 1
const botaoRadio1=document.createElement("input");
const labelBotaoRadio1=document.createElement("label");
botaoRadio1.setAttribute("type", "radio");
botaoRadio1.setAttribute("id","btnRadio1");
elementoRadio.appendChild(botaoRadio1);
elementoRadio.appendChild(labelBotaoRadio1);
labelBotaoRadio1.textContent="Sort";
// CHECKER RADIO1
botaoRadio1.addEventListener("click",()=>{
    botaoRadio2.checked = false;
    botaoRadio3.checked = false;
    botaoRadio4.checked = false;
    botaoRadio5.checked = false;
})


// RADIO 2
const botaoRadio2=document.createElement("input");
const labelBotaoRadio2=document.createElement("label");
botaoRadio2.type = "radio";
botaoRadio2.value = "radioOpcao2";
botaoRadio2.id="radioOpcao2"
botaoRadio2.className = "botaoRadio"
elementoRadio.appendChild(botaoRadio2)
elementoRadio.appendChild(labelBotaoRadio2)
labelBotaoRadio2.textContent="Compare Function"
// CHECKER RADIO2
botaoRadio2.addEventListener("click",()=>{
    botaoRadio4.checked = false;
    botaoRadio3.checked = false;
    botaoRadio1.checked = false;
    botaoRadio5.checked = false;
})


// RADIO 3
const botaoRadio3=document.createElement("input");
const labelBotaoRadio3=document.createElement("label");
botaoRadio3.type = "radio";
botaoRadio3.value = "radioOpcao3";
botaoRadio3.id="radioOpcao3"
botaoRadio3.className = "botaoRadio"
elementoRadio.appendChild(botaoRadio3)
elementoRadio.appendChild(labelBotaoRadio3)
labelBotaoRadio3.textContent="Bubble Sort"
// CHECKER RADIO3
botaoRadio3.addEventListener("click",()=>{
    botaoRadio1.checked = false;
    botaoRadio2.checked = false;
    botaoRadio4.checked = false;
    botaoRadio5.checked = false;
})

// RADIO 4
const botaoRadio4=document.createElement("input");
const labelBotaoRadio4=document.createElement("label");
botaoRadio4.type = "radio";
botaoRadio4.value = "radioOpcao4";
botaoRadio4.id="radioOpcao3"
botaoRadio4.className = "botaoRadio"
elementoRadio.appendChild(botaoRadio4)
elementoRadio.appendChild(labelBotaoRadio4)
labelBotaoRadio4.textContent="Quick Sort"
// CHECKER RADIO3
botaoRadio4.addEventListener("click",()=>{
    botaoRadio1.checked = false;
    botaoRadio2.checked = false;
    botaoRadio3.checked = false;
    botaoRadio5.checked = false;
})


// RADIO 5
const botaoRadio5=document.createElement("input");
const labelBotaoRadio5=document.createElement("label");
botaoRadio5.type = "radio";
botaoRadio5.value = "radioOpcao5";
botaoRadio5.id="radioOpcao5"
botaoRadio5.className = "botaoRadio"
elementoRadio.appendChild(botaoRadio5)
elementoRadio.appendChild(labelBotaoRadio5)
labelBotaoRadio5.textContent="Selection Sort"
// CHECKER RADIO3
botaoRadio5.addEventListener("click",()=>{
    botaoRadio1.checked = false;
    botaoRadio2.checked = false;
    botaoRadio3.checked = false;
    botaoRadio4.checked = false;
})

body.appendChild(cabecalho)
body.appendChild(elemento1)
body.appendChild(elementoRadio)
body.appendChild(saidaElemento)








