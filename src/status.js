import saveList from './savelist.js';

const statusCompleted = (list, id, status) => {
  list.forEach((elem) => {
    const ids = parseInt(elem.index, 10);
    const listId = parseInt(id, 10);
    if (ids === listId) {
      elem.completed = status;
    }
  });
  saveList(list);
  return list;
};

const completedTask = (id, status) => {
  const spanFinished = document.getElementById(`id${id}`);
  const statStri = status.toString();
  if (statStri === 'true') {
    spanFinished.classList.add('checked');
  } else if (statStri === 'false') {
    spanFinished.classList.remove('checked');
  }
};

const addCheck = (list) => {
  const checkboxes = document.querySelectorAll('input[name="listElem"]');
  checkboxes.forEach((checks) => {
    checks.onchange = function func() {
      statusCompleted(list, checks.id, this.checked);
      completedTask(checks.id, this.checked);
    };
  });
};

export { completedTask, addCheck };