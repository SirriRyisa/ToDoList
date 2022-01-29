import './style.css';

// select the Element
const toDoo = document.querySelector('.add-todo');
const contentToDo = document.getElementById('lists');
// classes names
function myToDo(toDo) {
  const item = `
          <li class="list-item">
            <input type="checkbox" class="sportss" name="Sports" value="Sports">
            <label for="Sports" id="item"> ${toDo}<span class="removee"><i class="fas fa-ellipsis-v""></i></span></label><br>
           </li>
  `;
  const position = 'beforeend';
  contentToDo.insertAdjacentHTML(position, item); 
}
// add item to list when user hit enter
toDoo.addEventListener('keyup', (event) => {
   if(event.keyCode == 13) {
    const toDo = toDoo.value;

    if(toDo) {
      myToDo(toDo);
    }
    toDoo.value = '';
   }
 })

myToDo.addEventListener('click', (toDo) => {
myToDo.style.textdecoration = 'line-through';
});
