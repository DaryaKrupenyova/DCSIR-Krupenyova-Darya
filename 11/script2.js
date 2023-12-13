let originalCart = [];
let cart = [];

function updateCart() {
    const cartContainer = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <span>${product.name} - ${product.price} руб x ${product.quantity} = ${product.price * product.quantity} руб</span>
            <button class="button" onclick="removeProduct(${index})">Удалить</button>
            <button class="button" onclick="addQuantity(${index})">Добавить</button>`;
        cartContainer.appendChild(productElement);
        total += product.price * product.quantity;
    });

    totalElement.textContent = `Цена: ${total} руб`;
}

function removeProduct(index) {
    cart.splice(index, 1);
    updateCart();
}

function addQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

const products = [
    { name: 'Молоко', price: 160, quantity: 1 },
    { name: 'Масло', price: 270, quantity: 1 },
    { name: 'Печенье', price: 235, quantity: 1 }
];

cart.push(products[0]);
cart.push(products[1]);
cart.push(products[2]);
originalCart = [...cart];

function sortAscending() {
    cart.sort((a, b) => a.price - b.price);
    updateCart();
}

function sortDescending() {
    cart.sort((a, b) => b.price - a.price);
    updateCart();
}

function applyFilter() {
    let minimum = document.getElementById('minPriceInput');
    let maximum = document.getElementById('maxPriceInput');

    const minPrice = parseFloat(minimum.value) || 0;
    const maxPrice = parseFloat(maximum.value) || Infinity;

    cart = filterByPrice(originalCart, minPrice, maxPrice);
    updateCart();
}

function resetFilter() {
    let minimum = document.getElementById('minPriceInput');
    let maximum = document.getElementById('maxPriceInput');

    minimum.value = '';
    maximum.value = '';

    cart = [...originalCart];
    updateCart();
}

function filterByPrice(products, min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

updateCart();