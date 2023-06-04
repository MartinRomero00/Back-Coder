import express from 'express';
import morgan from 'morgan';
import "./db/database.js"
import { errorHandler } from './middlewares/errorHandler.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler)
app.use(morgan('dev'));

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(8080, () => {
console.log('Server is running on port 8080');
});