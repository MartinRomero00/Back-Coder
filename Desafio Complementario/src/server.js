import express from 'express';
import morgan from 'morgan';
import {errorHandler} from './middlewares/errorHandler.js';
import './db/database.js';
import productsRouter from './routes/productsRouter.js';
import {Server} from 'socket.io';
import {__dirname} from './path.js';
import messageRouter from './routes/messageRouter.js';
import handlebars from 'express-handlebars';
import { addMessage } from './daos/mongodb/messageDao.js';
import cartRouter from './routes/cartRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(errorHandler);
app.use(morgan('dev'));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.use('/products', productsRouter);
app.use('/messages', messageRouter);
app.use('/cart', cartRouter);

const port = 8080;

const httpServer = app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

const socketServer = new Server(httpServer);

socketServer.on('connection', async (socket) => {
    console.log('New client connected');

    socket.on('guardarMensaje', async (msg) => {
        try {
            const message = await addMessage(msg);
            console.log('Mensaje guardado' + message);
            
        } catch (error) {
            console.log(error);
        }
    });
});