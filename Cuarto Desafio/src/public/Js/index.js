const socketCliente = io();

const productosList = document.getElementById('productos');
const form = document.getElementById('form');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    socketCliente.emit('nuevo-producto', {
        title: title.value,
        price: price.value,
        description: description.value
    });
    title.value = '';
    price.value = '';
    description.value = '';
    title.focus();
});


socketCliente.on('get-products', (productos) => {
    productosList.innerHTML = `
    <li>Productos</li>
    ${productos.map(producto => `<li>${producto.title} - $${producto.price} - ${producto.description}</li> <Button onclick="deleteProduct(${producto.id})">Delete</Button>`).join('')}
    `;
});

const deleteProduct = (id) => {
    socketCliente.emit('delete-product', id);

};