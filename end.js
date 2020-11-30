// Show, Unshow input add text

const showInput = document.querySelector(".head__button");
const div = document.querySelector(".add_task");
showInput.addEventListener("click", () => {
  div.classList.toggle("show");
});

const addTodoButton = document.querySelector(".add_task-btn");
const ul = document.querySelector("ul.tasks");
const inputValue = document.querySelector("input[type='text']");
// createnewTodo

const createTodo = () => {

  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("disabled", "disabled");
  if(inputValue.value !== "") {
    input.setAttribute("value", inputValue.value);

} else {
    return (alert("Please, enter task")) 
}
  // input.setAttribute("value", inputValue.value)
  input.className = "tasks_list-input";
  ul.append(li);
  li.append(input);
  inputValue.value = "";

 
  const editElem = document.createElement("button");
  editElem.className = "add_task-edit fa-pencil-square fa-2x";
  li.append(editElem);

 
  const deleteElem = document.createElement("button");
  deleteElem.className = "add_task-delete fa-times-circle fa-2x";
  li.append(deleteElem);

}

// save localeStorage
const saveTodoList = document.querySelector("button.save");

saveTodoList.addEventListener('click', () => {
    localStorage.setItem('todos', ul.innerHTML)

    });

// delete TodoList localeStorage
const deleteTodoList = document.querySelector("button.clear");
deleteTodoList.addEventListener('click', function(){
    ul.innerHTML= "";
    localStorage.removeItem('todos',ul.innerHTML );
    });
// load localeStorage

const loadTodo = () => {
  const data = localStorage.getItem("todos");
  if (data) {
      ul.innerHTML = data;
  }
  const deleteButton = document.querySelectorAll(".add_task-delete");
  
  for (const button of deleteButton) {
      deleteLi(button);
  }    
}

//edit element
ul.addEventListener("click", function(event) {
	const buttonEdit = event.target.closest('button.add_task-edit');
	if (buttonEdit) { 
    buttonEdit.previousSibling.toggleAttribute("disabled");
    buttonEdit.previousSibling.focus(); 
    buttonEdit.previousSibling.setAttribute("value", buttonEdit.previousSibling.value)

	}
});


// delete element Li
const deleteLi = (deleteElem) => {
  deleteElem.addEventListener("click", () => {
      deleteElem.parentElement.remove();
  });
}

addTodoButton.addEventListener("click", () => {
  createTodo()

})
loadTodo();
// deleteLi(deleteElem);