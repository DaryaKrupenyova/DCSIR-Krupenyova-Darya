"use strict";

// Генерация случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация случайной капчи (буквы разного регистра)
function generateTextCaptcha() {
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var captcha = '';

    for (var i = 0; i < 6; i++) {
        var randomIndex = getRandomInt(0, letters.length - 1);
        captcha += letters[randomIndex];
    }

    return captcha;
}

// Проверка на пустой ввод
function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
}

var captchaContainer = document.getElementById('captchaContainer');
var captchaForm = document.getElementById('captchaForm');
var captchaInput = document.getElementById('captchaInput');
var captchaText = document.getElementById('captchaText');
var captchaButton = document.getElementById('captchaButton');
var submitButton = document.getElementById('submitButton');
var text = "";


// Обработчик капчи
captchaButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (text == captchaInput.value) {
        alert('Вы не робот. Фух!');
        submitButton.disabled =  false;
        captchaInput.value = ' '; // Очистка инпута
    } 
    else {
        // Генерация случайной капчи с примером
        alert('Ошибка! Ну неужели робот? Попробуйте другую капчу.');
        captchaInput.value = ''; // Очистка инпута

        var num1 = getRandomInt(1, 10);
        var num2 = getRandomInt(1, 10);
        captchaText.innerText = `${num1} + ${num2} = ?`;
        text = `${num1+num2}`;
    }
});

// Инициализация формы
function initializeForm() {
    // Генерация случайной капчи с буквами
    text = generateTextCaptcha();
    captchaText.innerText = text;
}

// Обработчик изменения ввода
captchaInput.addEventListener('input', function(){
    captchaButton.disabled = isEmpty(captchaInput.value);
});

  // Инициализация формы при загрузке страницы
  window.addEventListener('load', initializeForm);