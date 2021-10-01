import './style.css';
import { completedTask, addCheck } from './status.js';
import saveList from './savelist.js';

let tasksList = [];

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listItems = document.getElementById('list-elem');

const showItems = () => {
  listItems.innerHTML = '';
  tasksList.forEach((task) => {
    const taskElement = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    descriptionElem.id = `id${task.index}`;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = task.index;
    checkBox.name = 'listElem';

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

  addCheck(tasksList);

  return listItems;
};

const taskDefaul = () => {
  tasksList.push(new Task('Read', false, 1));
  tasksList.push(new Task('Clean', false, 2));
  tasksList.push(new Task('Run', false, 3));
};

const updateCheck = (list) => {
  const checkboxes = document.querySelectorAll('input[name="listElem"]');
  checkboxes.forEach((checks) => {
    list.forEach((elem) => {
      const ids = parseInt(checks.id, 10);
      if (ids === elem.index) {
        checks.checked = elem.completed;
        completedTask(checks.id, elem.completed);
      }
    });
  });
};

window.onload = () => {
  const local = window.localStorage.getItem('tasklist');
  if (local != null) {
    tasksList = JSON.parse(local);
  } else {
    taskDefaul();
  }
  showItems();
  saveList(tasksList);
  updateCheck(tasksList);
};

const textBox = document.getElementById('new-task');
textBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && textBox.value !== '') {
    tasksList.push(new Task(textBox.value, false, Date.now()));
    textBox.value = '';
    showItems();
    saveList(tasksList);
    updateCheck(tasksList);
  }
});
