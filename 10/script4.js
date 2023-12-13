"use strict";

function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + '...';
    } 
    else {
      return str;
    }
}

textInput.addEventListener('input', function(){
    var textInput = document.getElementById('textInput');
    var maxLength = 20;
    var resultElement = document.getElementById('result');
    var truncatedString = truncate(textInput.value, maxLength);
    resultElement.innerText = 'Результат: ' + truncatedString;
});
