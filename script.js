// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma tarefa
function adicionarTarefa() {
  const inputTarefa = document.getElementById("novaTarefa");
  let novaTarefa = inputTarefa.value;

  // Tratamento da entrada
  novaTarefa = novaTarefa.trim().toUpperCase(); // Remove espaços e converte para maiúsculas

  // Verifica se a tarefa já existe
  if (tarefas.includes(novaTarefa)) {
    alert("Esta tarefa ja existe na sua lista!! ");
    return; // Impede a adição da tarefa duplicada
  }

  if (novaTarefa !== "") {
    tarefas.push(novaTarefa); // Adiciona a tarefa ao array

    // Cria um elemento de lista (li)
    const elementoLista = document.createElement("li");
    elementoLista.textContent = novaTarefa;

    // Adiciona a tarefa à lista na tela
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.appendChild(elementoLista);

    // Limpa o campo de entrada
    inputTarefa.value = "";
  }
}

// Função para limpar a lista de tarefas
function limparLista() {
  tarefas = []; // Esvazia o array de tarefas

  // Remove todos os elementos da lista na tela
  const listaTarefas = document.getElementById("listaTarefas");
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

// Função para ordenar a lista de tarefas
function ordenarLista() {
  tarefas.sort(); // Ordena o array de tarefas em ordem alfabética

  // Remove todos os elementos da lista na tela
  const listaTarefas = document.getElementById("listaTarefas");
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }

  // Adiciona as tarefas ordenadas de volta à lista na tela
  tarefas.forEach(tarefa => {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = tarefa;
    listaTarefas.appendChild(elementoLista);
  });
}
