import _ from 'lodash';
import './style.css';

let task = {
  description: '',
  completed: true,
  index: 0
}

let tasksList = [1]; //array of objects

function showItems() {
  const listItems = getElementById('list-elem');
  
  for (let i = 0; i < tasksList.length; i++) {
    listItems.innerHTML = "test";
  }
}

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());