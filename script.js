

const container = document.querySelector("ul");

const fabrica = {

  opcoes: ["feijao","milho","ervilha","sardinhas","pessego","sopa","tomate"],

  quantidade_de_latas: 10,

  cria_latas() {
    for(let i = 0; i < this.quantidade_de_latas; i++){
      let new_node = document.createElement("li");
      let lata_vazia = {
        marca: "dev.Foods()",
        opcao: undefined,
        elemento: container.appendChild(new_node)
      };
      lata_vazia.elemento.innerHTML = `Lata ${i} <span> Opcao </span>`;
      this.latas.push(lata_vazia);
    }
    return this.latas;
  },

  define_opcoes() {
    for(let lata of this.latas){
      lata.opcao = this.seleciona_opcao_aleatoria();
    }
  },

  seleciona_opcao_aleatoria() {
    let indice_aleatorio = Math.floor(Math.random() * this.opcoes.length);
    return this.opcoes[indice_aleatorio];
  },

  latas: [],
}

function atualiza_latas() {
  fabrica.define_opcoes();
  coloca_latas_na_tela();
}

function limpa_classes() {
  for(let lata of fabrica.latas){
    lata.elemento.classList.remove(lata.opcao);
  }
}

function coloca_latas_na_tela() {
  for(let lata of fabrica.latas){
    let comidaSpan = lata.elemento.firstElementChild;

    // remove todas as classes do elemento
    lata.elemento.className = "";
    
    comidaSpan.innerText = lata.opcao;

    lata.elemento.classList.add(lata.opcao);



  }
}

function inicializa_pagina(){
  for (let lata of fabrica.latas)
    lata.elemento.firstElementChild.innerText = "COMIDA";
}

fabrica.cria_latas();
