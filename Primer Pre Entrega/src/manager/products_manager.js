import fs from 'fs';
import {__dirname} from '../path.js';

const productsFilePath = __dirname + '/fs/products.json';

export const sumarId = async() => {
    try {
        let id = 0;
        const products = await getProducts();
        products.map(product => {
            if (product.id > id) {
                id = product.id;
            }
        });
        return id + 1;
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async () => {
    try {
        if (fs.existsSync(productsFilePath)) {
            const product = await fs.promises.readFile(productsFilePath, 'utf-8');
            return JSON.parse(product);
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id)  =>{
    try {
        let products = await getProducts();
        let product = products.find(product => product.id == id);
        return product;
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (title, description, price, code, thumbnail, stock,status, category ) => {
    try {
        const products = await getProducts();
        const product = {
            id: await sumarId(),
            title,
            description,
            price,
            code,
            thumbnail,
            stock,
            status : status ? false : true,
            category,
        }
        products.push(product);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, title, description, price, code, thumbnail, stock,status, category) => {
    try {
        let products = await getProducts();
        let index = products.findIndex(product => product.id == id);
        products[index].title = title;
        products[index].description = description;
        products[index].price = price;
        products[index].code = code;
        products[index].thumbnail = thumbnail;
        products[index].stock = stock;
        products[index].status = status;
        products[index].category = category;
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        let products = await getProducts();
        let index = products.findIndex(product => product.id == id);
        products.splice(index, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}