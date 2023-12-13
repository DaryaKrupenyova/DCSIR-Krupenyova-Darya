"use strict"

function showNotification(options) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = options.content;

    document.body.appendChild(notification);

    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
      document.body.removeChild(notification);
    }, 1500);
}

// Пример использования
showNotification({ content: 'Это уведомление!' });