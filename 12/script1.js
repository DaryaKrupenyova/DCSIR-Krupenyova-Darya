"use strict"

let notificationBody = document.getElementById('notification_body');
notificationBody.dataset.after = 4;

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
}

setInterval(addNotification, 3000);
