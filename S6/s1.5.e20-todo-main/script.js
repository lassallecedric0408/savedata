//définir la fonction comme "async" me donne le droit
//d'utliser "await" dans la fonction qui va me permettre
//de gérer facilement les Promise
async function main() {
  refresh();
}

async function refresh() {
  //on effectue une requête HTTP GET pour récupérer les valeurs des todos
  const response = await fetch('http://localhost:3000/todos');
  //fetch requiert une étape de conversion du stream en json
  const todos = await response.json();

  const todosEl = document.getElementById('todos');
  todosEl.innerHTML = '';

  //créer la liste <ul> qui contiendra les tâches
  const todosListEl = document.createElement('ul');
  //pour chacun des "todos" qui viennent depuis l'API
  todos.forEach((todo) => {
    //je crée un élément de liste
    const todoEl = document.createElement('li');
    //qui contient le texte de sa description
    todoEl.textContent = todo.label;
    todoEl.dataset.id = todo.id;
    if (todo.done) {
      todoEl.style.textDecoration = 'line-through';
    }
    //et je l'ajoute à la liste
    todosListEl.appendChild(todoEl);
  });

  todosListEl.addEventListener('click', toggleTodoDone);

  //on ajoute à la div qui contient la gestion des todos
  //notre liste complète
  todosEl.appendChild(todosListEl);

  let count = 0;
  document
    .getElementById('bigButton')
    .addEventListener('click', function (event) {
      count++;
      event.target.textContent = count;
    });
}

async function toggleTodoDone(event) {
  await fetch(`http://localhost:3000/todos/${event.target.dataset.id}`, {
    method: 'PUT',
  });
  refresh();
}

main();

/*
const request = fetch('http://localhost:3000/todos');
request.then(response => {
    console.log(response);
    response.json()
        .then(todos => {
            console.log(todos);
        });
});
*/
