const listForm = document.getElementsByTagName('li');
for (i = 0; i < listForm.length; i++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  listForm[i].appendChild(span);
}

const deleteItem = document.getElementsByClassName('close');
for (i = 0; i < deleteItem.length; i++) {
  deleteItem[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

const checkedItem = document.querySelector('ul');
checkedItem.addEventListener('click', function(fisishedItem) {
  if (fisishedItem.target.tagName === 'li') {
    finishedItem.target.classList.toggle('checked');
  }
}, false);

const userInput = document.querySelector('#add-to-do')
const toDoForm = document.querySelector('#to-do-form')
const toDoList = document.querySelector('#to-do-list')

toDoForm.addEventListener('submit', addToDoItem)

function addToDoItem(Item) {
    Item.preventDefault();
    const toDo = userInput.value;

    const newToDo = document.createElement('li')
    newToDo.className = 'to-do';
    newToDo.innerText = toDo;
    newToDo.target = '_blank';

    toDoList.appendChild(newToDo)

    toDoForm.reset()

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}



// Bonus - add the list to local storage and be able to retrieve it from local storage 