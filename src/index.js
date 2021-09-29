import './style.css';
import {status} from './status'; 

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

// module for change completed status
tasksList.forEach(elem => {
  if(elem.index == 1) {
    console.log(elem.index);
  }
});

const listItems = document.getElementById('list-elem');

const showItems = () => {
  tasksList.forEach((task) => {
    const taskElement = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

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
