import './style.css';
import addCheck from './status.js';

let tasksList = [];

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

function saveList() {
  window.localStorage.setItem('tasklist', JSON.stringify(tasksList));
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

window.onload = (event) => {
  const local = window.localStorage.getItem('tasklist');
  if (local != null) {
    tasksList = JSON.parse(local);
    showItems();
  }
};

const textBox = document.getElementById('new-task');
textBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && textBox.value !== '') {
    tasksList.push(new Task(textBox.value, false, Date.now()));
    textBox.value = '';
    showItems();
    saveList();
  }
});
