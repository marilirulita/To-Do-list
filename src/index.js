import './style.css';
import { completedTask, addCheck } from './status.js';
import saveList from './savelist.js';
/* eslint-disable */
import editTask from './edit.js';   
/* eslint-enable */

let tasksList = [];
let ids = 0;

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const listItems = document.getElementById('list-elem');

export const showItems = (list) => {
  listItems.innerHTML = '';
  list.forEach((task) => {
    const taskElement = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    descriptionElem.id = `id${task.index}`;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = task.index;
    checkBox.name = 'listElem';

    editTask(descriptionElem, list, task.index);

    taskElement.classList.add('task-element');
    taskElement.appendChild(checkBox);
    taskElement.appendChild(descriptionElem);
    listItems.appendChild(taskElement);
  });

  addCheck(list);

  return listItems;
};

export const updateCheck = (list) => {
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
    ids = tasksList.length;
  }
  showItems(tasksList);
  saveList(tasksList);
  updateCheck(tasksList);
};

const textBox = document.getElementById('new-task');
textBox.addEventListener('keypress', (event) => {
  const local = window.localStorage.getItem('tasklist');
  tasksList = JSON.parse(local);
  if (event.key === 'Enter' && textBox.value !== '') {
    ids = tasksList.length;
    tasksList.push(new Task(textBox.value, false, (ids += 1)));
    textBox.value = '';
    showItems(tasksList);
    saveList(tasksList);
    updateCheck(tasksList);
  }
});
