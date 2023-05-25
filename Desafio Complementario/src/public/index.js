const socket = io();

const formulario = document.getElementById('mensajeForm');
const mensajeInput = document.getElementById('mensajeInput');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const msg = mensajeInput.value;

  socket.emit('guardarMensaje', msg);
  mensajeInput.value = ''; 
});