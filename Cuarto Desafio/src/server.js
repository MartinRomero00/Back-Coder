import express from 'express';
import { __dirname } from './path.js';
import {Server} from 'socket.io'
import handlebars from 'express-handlebars'
import viewsRoutes from './routes/views_routes.js';
import { addProduct, getProducts,deleteProduct } from './manager/products_manager.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use("/", viewsRoutes);

const httpServer = app.listen(8080, () => {
console.log('Server is running on port 8080');
});

const socketServer = new Server(httpServer);

socketServer.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
    socket.on('nuevo-producto',async (producto) => {
        await addProduct(producto.title, producto.price, producto.description);
        socketServer.emit('get-products', await getProducts());
    });
    socket.on('delete-product', async (id) => {
        await deleteProduct(id);
        socketServer.emit('get-products', await getProducts());
    });
});