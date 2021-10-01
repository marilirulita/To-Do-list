import { showItems, updateCheck } from './index.js';
import saveList from './savelist.js';

// function for update index of each element position
function updatePosition(list) {
  list.forEach((task, id) => {
    task.index = id + 1;
  });
}

export default function deleteTask(del, indx, list) {
  del.addEventListener('click', () => {
    list.forEach((task) => {
      const id = parseInt(indx, 10);
      if (task.index === id) {
        const indice = list.indexOf(task);
        list.splice(indice, 1);
        updatePosition(list);
        showItems(list);
        saveList(list);
        updateCheck(list);
      }
    });
  });
}

// function for delete all completed
function deleteCompleted() {
  const deletButon = document.getElementById('deleteButton');
  deletButon.addEventListener('click', () => {
    const local = window.localStorage.getItem('tasklist');
    const list = JSON.parse(local);
    const newList = list.filter((task) => task.completed === false);
    updatePosition(newList);
    showItems(newList);
    saveList(newList);
  });
}

deleteCompleted();