"use strict"

let smallPics = document.getElementById('sp');
let bigPic = document.getElementById('bp');

smallPics.addEventListener("click", function (event) {
    if (event.target.closest('img')) {
        bigPic.src = event.target.closest('img').getAttribute('src');
    }
})
