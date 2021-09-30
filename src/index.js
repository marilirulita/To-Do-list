import './style.css';
import {statusCompleted} from './status'; 

const tasksList = [];
let ids = 0;

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

tasksList.push(new Task('homework', false, (ids += 1)));
tasksList.push(new Task('clean', false, (ids += 1)));
tasksList.push(new Task('read', false, (ids += 1)));

// *********************************************************

// this will change visible or invisible to the list item? maybe?
// checkBox.classList.toggle('visible');

// this will manage the visible or invisible list elem
//let check = document.getElementById('id');
//check.addEventListener('click', statusCompleted(tasksList, id, toggle/class?));

// load page code
document.addEventListener('DOMContentLoaded',(event) => {
  console.log("Hello load content!");
});

window.onload = (event) => {
  console.log('The page has fully loaded');
};

// Press enter code
let textBox = document.getElementById('new-task');
textBox.addEventListener('keypress', (event) => {
  if(event.key === "Enter" && textBox.value !== '') {
    console.log("new task added!");
  }
});

// ***********************************************************

const listItems = document.getElementById('list-elem');

const showItems = () => {
  tasksList.forEach((task) => {
    const taskElement = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = task.index;
    checkBox.name = "listElem";

    taskElement.classList.add('task-element');
    taskElement.appendChild(checkBox);
    taskElement.appendChild(descriptionElem);
    listItems.appendChild(taskElement);
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Clear all completed';
  deleteButton.type = 'button';
  listItems.appendChild(deleteButton);

  return listItems;
};

showItems();

// **************************************
// code for add an event listener to check
function checkChange(id) {
  const check = document.getElementById(id);
  check.addEventListener('change',function(event) { 
    statusCompleted(tasksList, id, true);
    console.log(tasksList);
   });
}

  const checkboxes = document.querySelectorAll('input[name="listElem"]');
  checkboxes.forEach(checks => {
    checkChange(checks.id);
  });
  