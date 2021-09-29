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
const check = document.getElementById('2');

check.addEventListener('click',function(event) {
    statusCompleted(tasksList, check.id, true);
    console.log(tasksList);
    event.preventDefault();
});
