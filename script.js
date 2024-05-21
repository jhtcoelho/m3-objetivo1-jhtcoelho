const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

// Função para criar um elemento de tarefa
function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.classList.add('task__item');

  const divs = document.createElement('div');
  divs.classList.add('task-info__container');

  const span = document.createElement('span');
  span.classList.add('task-type');

  // Adicionar classe de estilo com base no tipo da tarefa
  if (task.type === 'Urgente') {
    span.classList.add('span-urgent');
  } else if (task.type === 'Importante') {
    span.classList.add('span-important');
  } else if (task.type === 'Normal') {
    span.classList.add('span-normal');
  }

  const p = document.createElement('p');
  p.textContent = task.title;

  const button = document.createElement('button');
  button.classList.add('task__button--remove-task');
  button.addEventListener('click', () => {
    // Remover a tarefa do array pelo seu índice
    tasks.splice(index, 1);
    // Atualizar a lista de tarefas na tela
    renderElements(tasks);
  });

  li.appendChild(divs);
  divs.appendChild(span);
  divs.appendChild(p);
  li.appendChild(button);

  return li;
}

// Função para renderizar os elementos
function renderElements(tasks) {
  const taskList = document.querySelector('.tasks__list');
  taskList.innerHTML = ''; // Limpar a lista antes de renderizar

  tasks.forEach((task, index) => {
    const taskItem = createTaskItem(task, index);
    taskList.appendChild(taskItem);
  });
}

// Função para adicionar uma nova tarefa
function addTask() {
  const titleInput = document.querySelector('#input_title');
  const typeInput = document.querySelector('.form__input--priority');

  const newTask = {
    title: titleInput.value,
    type: typeInput.value
  };

  if (newTask.type === 'Urgente') {
    newTask.classList.add('span-urgent');
  } else if (task.type === 'Importante') {
    newTask.classList.add('span-important');
  } else if (task.type === 'Normal') {
    newTask.classList.add('span-normal');
  }

  // Adicionando a nova tarefa ao array
  tasks.push(newTask);

  // Renderizando novamente a lista de tarefas
  renderElements(tasks);

  // Limpar os campos de input
  titleInput.value = '';
  typeInput.value = '';
}

// Adicionar evento de clique ao botão "Adicionar Tarefa na Lista"
const addButton = document.querySelector('.form__button--add-task');
addButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir o comportamento padrão do formulário
  addTask();
});

// Chamar a função para renderizar os elementos
renderElements(tasks);
