function adicionarTarefa() {  

           
    // receber o valor do input do usuario
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    let mensagem = document.getElementById("mensagem")

    //se o valor do input for vazio então mostra uma mensagem de erro para o usuario
    
    if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para dicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        }  else{
                //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso 

            //criar novo item (li) e insere na (lista ul)
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa =document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)

        }
           
    //limpa o input do usuario
    inputTarefa.value = ""

    

}