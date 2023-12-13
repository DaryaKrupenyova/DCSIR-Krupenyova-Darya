"use strict";

var basket = document.getElementById('basket');
var addButton = document.getElementById('addButton');


//функция-конструктор
function Accumulator(startingValue) {
    this.value = startingValue; // установка начального значения

    this.read = function () {
        var userInput = parseFloat(prompt('Введите количество:'));
        if (!isNaN(userInput)) {
            this.value += userInput;
        } 
        else {
            alert('Введите корректное число.');
        }
        updateBasket(); // Обновляем отображение результата
    };
}

var accumulator = new Accumulator(0);

function updateBasket() {
    basket.textContent = 'Корзина: ' + accumulator.value;
}
    
function ButtonClick() {
    accumulator.read();
}

window.addEventListener('load', updateBasket);
addButton.addEventListener('click', ButtonClick);