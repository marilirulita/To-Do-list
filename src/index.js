import _ from 'lodash';
import './style.css';

let tasksList = []; //array of objects
let ids = 0;

function Task(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

tasksList.push(new Task("homework", false, ids++));
tasksList.push(new Task("clean", false, ids++));
tasksList.push(new Task("read", false, ids++));

console.log(tasksList);

function showItems() {
  const listItems = document.getElementById('list-elem');
  
  for (let i = 0; i < tasksList.length; i++) {
    const taskElement = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = tasksList[i].description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    taskElement.classList.add('task-element');
    taskElement.appendChild(checkBox);
    taskElement.appendChild(descriptionElem);
    listItems.appendChild(taskElement);
  }

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Clear all completed';
  deleteButton.type = 'button';
  listElement.appendChild(deleteButton);

  return listItems;
}

const listElement = document.getElementById('list-elem');
listElement.appendChild(showItems());

function add() {
  const task = document.getElementById('new-task');

  const newTask = new Task(task.value, false, ids);

  ids += 1;

  tasksList.push(newTask);
}

//const taskInput = document.getElementById("new-task");

//taskInput.addEventListener("keyup", function(event) {
//  if (event.characterCode == 13) {
//    add();
//  }
//});
