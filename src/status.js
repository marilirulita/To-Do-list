// contain methods related to the status updates (completed: true / false).

export const statusCompleted = (list, id, status) => {
  list.forEach(elem => {
    if(elem.index == id) {
      elem.completed = status;
    }
  });
  return list;
}