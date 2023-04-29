import fs from 'fs';
import {__dirname} from '../path.js';

const cartsFilePath = __dirname + '/fs/carts.json';

export const sumarId = async() => {
    try {
        let id = 0;
        const cart = await getCart();
        cart.map(cart => {
            if (cart.id > id) {
                id = cart.id;
            }
        });
        return id + 1;
    } catch (error) {
        console.log(error);
    }
}

export const getCart = async () => {
    try {
        if (fs.existsSync(cartsFilePath)) {
            const cart = await fs.promises.readFile(cartsFilePath, 'utf-8');
            return JSON.parse(cart);
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
}


export const createCart = async () => {
    try {
        const carts = {
            id: await sumarId(),
            products: []
        }
        const cart = await getCart();
        cart.push(carts);
        fs.writeFileSync(cartsFilePath, JSON.stringify(cart));
        return carts;
    } catch (error) {
        console.log(error);
    }
}

export const getCartById = async (id)  =>{
    try {
        let cart = await getCart();
        let carts = cart.find(cart => cart.id == id);
        return carts.products;
        
    } catch (error) {
        console.log(error);
    }
}

export const saveProductToCart = async (idCart, idProduct) => {
    try {
        const cart = await getCart();
        const carts = cart.find(cart => cart.id == idCart);
        if (carts) {
            const products = carts.products.find(product => product.id == idProduct);
            if (!products) {
                carts.products.push({
                    product: idProduct,
                    quantity: 1
                });
            } else {
                if (products.product == idProduct) {
                    quantity++;
                }
            }
        } else {
            console.log('no existe el carrito');
        }
        fs.writeFileSync(cartsFilePath, JSON.stringify(cart));
        return carts;
    } catch (error) {
        console.log(error);
    }
}