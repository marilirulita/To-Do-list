/* eslint-disable */
import deleteTask from './deleteItem.js';
/* eslint-enable */
import saveList from './savelist.js';

const updateArray = (list, id, value) => {
  list.forEach((elem) => {
    if (id === elem.index) {
      elem.description = value;
    }
  });
  saveList(list);
  return list;
};

export default function editTask(e, list, id) {
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
}