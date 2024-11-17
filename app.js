// let titulo = document.querySelector('h1')
// titulo.innerHTML ='Jogo do número secreto'

// let p = document.querySelector('p')
// p.innerHTML = 'Escolha um número entre 1 e 10'

let listadeNumeroSecreto =[]

let numeroSecreto = geradorNumero()
let tentativas = 1

function mostrarTexto(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto     
}

function exibirMensagemInicial(){
  mostrarTexto('h1', 'Jogo do número Secreto')
  mostrarTexto('p', 'Escolha um número entre 1 e 10')
}
exibirMensagemInicial()



function verificarChute(){
    let chute = document.querySelector('input').value
    // console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
      mostrarTexto('h1', 'Acertou')
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
      let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}`
      mostrarTexto('p', mensagemTentativas)
    } else {
      if (chute > numeroSecreto){
        mostrarTexto('p', 'O número secreto é menor que chute')
      } else {
        mostrarTexto('p','O número secreto é maior que chute')
      }
    }
    tentativas++
    limparCampo()
}

function geradorNumero() {
  // return parseInt(Math.random()*10+1)
  let numeroEscolhido = parseInt(Math.random()*10+1)
  let quantidadeDeElementos = listadeNumeroSecreto.length

  if(quantidadeDeElementos == 10){
    listadeNumeroSecreto = []
  }

  if(listadeNumeroSecreto.includes(numeroEscolhido)){
    return geradorNumero()
  } else {
    listadeNumeroSecreto.push
    return numeroEscolhido
  }
}

function limparCampo(){
  chute = document.querySelector('input')
  chute.value = ''
}

function reiniciarJogo(){
  let numeroSecreto = geradorNumero()
  limparCampo()
  tentativas = 1
  exibirMensagemInicial()
// mostrarTexto('h1', 'Jogo do número Secreto')
// mostrarTexto('p', 'Escolha um número entre 1 e 10')
}