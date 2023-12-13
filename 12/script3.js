"use strict"

function createListItem() {
    let userInput = prompt('Введите содержимое пункта списка:');
    
    if (userInput === null || userInput.trim() === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerText = userInput;
    
    document.getElementById('list').appendChild(listItem);
    
    createListItem();
}