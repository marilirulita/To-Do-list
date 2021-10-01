import './style.css';
import { completedTask, addCheck } from './status.js';
import saveList from './savelist.js';
import { deleteTask} from './deleteItem.js';

let tasksList = [];
let ids = 0;

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const updateArray = (list, id, value) => {
  list.forEach((elem) => {
    if (id === elem.index) {
      elem.description = value;
    }
  });
  saveList(list);
  return list;
};

// function to edit tasks
const editTask = (e, list, id) => {
  const d = document.createElement('input');
  d.type = 'text';
  const b = document.createElement('input');
  b.type = 'button';
  b.value = 'delete';

  e.addEventListener('click', () => {
    d.value = e.innerHTML;
    e.parentNode.replaceChild(d, e);
    d.parentNode.appendChild(b);

    const sibling = d.parentNode.firstChild;
    d.focus();
    deleteTask(b, sibling.id, list);
  });

  d.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      e.innerHTML = d.value;
      d.parentNode.replaceChild(e, d);
      e.parentNode.removeChild(b);
      updateArray(list, id, d.value);
    }
  });
};

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

const taskDefaul = () => {
  tasksList.push(new Task('Read', false, (ids += 1)));
  tasksList.push(new Task('Clean', false, (ids += 1)));
  tasksList.push(new Task('Run', false, (ids += 1)));
};

window.onload = () => {
  const local = window.localStorage.getItem('tasklist');
  if (local != null) {
    tasksList = JSON.parse(local);
  } else {
    taskDefaul();
  }
  ids = tasksList.length;
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
