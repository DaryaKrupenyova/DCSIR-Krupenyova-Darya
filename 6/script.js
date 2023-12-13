'use strict'

$("#burger").on("click", open_menu);

function open_menu(){
    let elements = $(".burger_lines");
    elements.toggleClass("burger_lines_closed");
    $("#menu").toggleClass("menu_opened");
}

let links = $("#menu > a");
links.on("click", open_menu);

