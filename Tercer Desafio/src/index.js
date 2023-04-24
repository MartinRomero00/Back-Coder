import express from 'express';
import fs from 'fs/promises'


const app = express();


app.get('/productos', (req, res) => {
    fs.readFile('./src/products.json', 'utf-8')
        .then(data => {
            const {limit} = req.query;
            const products = JSON.parse(data);
            let productsLimit
            if (limit) {
                productsLimit = products.filter(product => product.id <= Number(limit));
            } else {
                productsLimit = products;
            }
            res.send(productsLimit);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error al leer el archivo');
        });
});

app.get('/productos/:pid', (req, res) => {
    fs.readFile('./src/products.json', 'utf-8')
        .then(data => {
            const {pid} = req.params;
            const products = JSON.parse(data);
            let product;
            if (pid) {
                product = products.find(product => product.id === Number(pid));
            } else {
                product = products;
            }
            res.send(product);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error al leer el archivo');
        });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});