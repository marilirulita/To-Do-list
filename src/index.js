import './style.css';
import { completedTask, addCheck } from './status.js';
import saveList from './savelist.js';

let tasksList = [];
let ids = 0;

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// function for update index of each element position
function updatePosition(list) {
  list.forEach((task, id) => {
    task.index = id + 1;
  });
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
    deleteTask(b, sibling.id);
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

    editTask(descriptionElem, tasksList, task.index);

    taskElement.classList.add('task-element');
    taskElement.appendChild(checkBox);
    taskElement.appendChild(descriptionElem);
    listItems.appendChild(taskElement);
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Clear all completed';
  deleteButton.type = 'button';

  deleteCompleted(deleteButton, tasksList);

  listItems.appendChild(deleteButton);

  addCheck(tasksList);

  return listItems;
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

function deleteTask(del, indx) {
  del.addEventListener('click', () => {
    tasksList.forEach((task) => {
      const id = parseInt(indx, 10);
      if (task.index === id) {
        const indice = tasksList.indexOf(task);
        tasksList.splice(indice, 1);
        ids = tasksList.length;
        updatePosition(tasksList);
        showItems();
        saveList(tasksList);
        updateCheck(tasksList);
      }
    });
  });
}

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
  showItems();
  saveList(tasksList);
  updateCheck(tasksList);
};

const textBox = document.getElementById('new-task');
textBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && textBox.value !== '') {
    tasksList.push(new Task(textBox.value, false, (ids += 1)));
    textBox.value = '';
    showItems();
    saveList(tasksList);
    updateCheck(tasksList);
  }
});

// function for delete items

// function for delete all completed
function deleteCompleted(elem, list) {
  elem.addEventListener('click', () => {
    const newList = list.filter((task) => task.completed === false);
    tasksList = newList;
    ids = tasksList.length;
    updatePosition(tasksList);
    showItems();
    saveList(tasksList);
  });
}
