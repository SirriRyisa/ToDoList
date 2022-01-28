import './style.css';

// select the Element
const mainContainer = document.querySelector(".main-container");
const input = document.getElementById('#sports');
const label = document.getElementById('#item');
const clearList = document.querySelector(".clear-list");
const listItem = document.querySelector('.list-item');
const addToDo = document.querySelector('.add-todo');
const contentToDo = document.getElementById('lists')

// classes names

function myToDo(toDo) {
  const item = `
          <li class="list-item">
            <input type="checkbox" id="sports" name="Sports" value="Sports">
            <label for="Sports" id="item"> ${toDo}<span><i class="fas fa-ellipsis-v" job="delete" id="0"></i></span></label><br>
           </li>
  `;
  const position = 'beforeend';

  contentToDo.insertAdjacentHTML(position, item);
}

myToDo("Learn JavaScript");

// document.addEventListener("keyup", function(event) {
//   if(event.keyboardEvent.keyCode==13) {

//   }
// })

