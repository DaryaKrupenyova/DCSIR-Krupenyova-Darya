"use strict";

let notificationBody = document.getElementById('notification_body');
notificationBody.dataset.after = 4;
let timer = null;

function createNotification(message) {
    const notificationList = document.getElementById('noty_list');

    const notification = document.createElement('li');
    notification.textContent = message;

    notificationList.appendChild(notification);
}

function addNotification() {
    notificationBody.dataset.after++;
    const message = `${notificationBody.dataset.after}`;

    createNotification(message);
    
    timer = setTimeout(addNotification, 3000);
}

timer = setTimeout(addNotification, 3000);

function delay(func, delayTime) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => { func(); }, delayTime);
    };
}

const delayedAddNotification = delay(addNotification, 10000);

notificationBody.addEventListener("mouseenter", function(){
    delayedAddNotification();
});
