import express from 'express';
import morgan from 'morgan';
import {__dirname} from './path.js';
import productsRoutes from './routes/products_routes.js';
import cartsRoutes from './routes/carts_routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

app.listen(8080, () => {
console.log('Server is running on port 8080');
});