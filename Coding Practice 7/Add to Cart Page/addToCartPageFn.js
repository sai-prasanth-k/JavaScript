let inputEl = document.getElementById("cartItemTextInput");
let listItemsEl = document.getElementById('listItems');

function addToListBtn(){
    let list = document.createElement('li');
    list.classList.add('list');
    list.textContent = inputEl.value;
    listItemsEl.appendChild(list);
    inputEl.value = '';
}