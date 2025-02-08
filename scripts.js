let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = " "

    arrayDeTarefas.forEach( tarefa => {
        
        novaLista = novaLista + `
            <li class="item-tarefa">
                <p>${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista
}

function cliqueiNoBotao(){    
    if (input.value.trim() !== "") { // Evita adicionar tarefas vazias 
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
    input.value = "" // Limpa o campo de entrada
}
}

botao.addEventListener("click", cliqueiNoBotao)