const statusCompleted = (list, id, status) => {
  list.forEach((elem) => {
    if (elem.index === id) {
      elem.completed = status;
    }
  });
  return list;
};

const completedTask = (id, status) => {
  const spanFinished = document.getElementById(`id${id}`);
  if (status === true) {
    spanFinished.classList.add('checked');
  } else if (status === false) {
    spanFinished.classList.remove('checked');
  }
};

const addCheck = (list) => {
  const checkboxes = document.querySelectorAll('input[name="listElem"]');
  checkboxes.forEach((checks) => {
    checks.addEventListener('change', function (event) {
      statusCompleted(list, checks.id, this.checked);
      completedTask(checks.id, this.checked);
    });
  });
};

export { addCheck as default };