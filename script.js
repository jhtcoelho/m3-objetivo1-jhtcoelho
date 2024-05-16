const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements (task){
  let getList = document.querySelector("ul");
  getList.classList.add(tasks__list);

  task.forEach(element => {
    const taskItem = createTaskItem(task);

    getList.appendChild(taskItem);
    
  });

}

function createTaskItem (task){ 

  for (let i = 0; i < task.length; i++){

    let listItem = document.createElement("li");
    listItem.classList.add("task__item");
  
    let divs = document.createElement("div");
    divs.classList.add("task-info__container");


    let spans = document.createElement("span");
    if (task[i].type == "Urgente"){
      spans.classList.add("span-urgent"); 
    } else if (task[i].type == "Importante"){
      spans.classList.add("span-important");
    } else if (task[i].type == "Normal"){
      spans.classList.add("span-normal");
    }



    let paragraph = document.createElement("p");

    let deleteTask = document.createElement("button");
    deleteTask.classList.add("task__button--remove-task");
  
    listItem.appendChild(divs);
    divs.appendChild(spans);
    divs.appendChild(paragraph);
    listItem.appendChild(deleteTask);  
  }
}