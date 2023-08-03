import express from 'express';
import routerProducts from './routers/productsGeneratorRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', routerProducts);

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});