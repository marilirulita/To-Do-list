import { showItems, updateCheck } from './index.js';
import saveList from './savelist.js';

// function for update index of each element position
function updatePosition(list) {
  list.forEach((task, id) => {
    task.index = id + 1;
  });
}

export function deleteTask(del, indx, list) {
  del.addEventListener('click', () => {
    list.forEach((task) => {
      const id = parseInt(indx, 10);
      if (task.index === id) {
        const indice = list.indexOf(task);
        list.splice(indice, 1);
        let ids = list.length;
        updatePosition(list);
        showItems(list);
        saveList(list);
        updateCheck(list);
      }
    });
  });
}

// function for delete all completed
export function deleteCompleted(elem, list) {
  elem.addEventListener('click', () => {
    const newList = list.filter((task) => task.completed === false);
    console.log(list);
    console.log(newList);
    let ids = newList.length;
    updatePosition(newList);
    showItems(newList);
    saveList(newList);
  });
}