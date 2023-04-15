const fs = require('fs');



class ProductManager {
    constructor() {
        this.route = "./products.json";
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.route)) {
                const product = await fs.promises.readFile(this.route, 'utf-8');
                return JSON.parse(product);
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            let products = await this.getProducts();
            let product = products.find(product => product.id == id);
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    
    async addProduct(title, description, price, thumbnail, stock) {
        try {
            const products = await this.getProducts();
            const product = {
                id: await this.#sumarId(),
                title,
                description,
                price,
                thumbnail,
                stock,
            }
            products.push(product);
            fs.writeFileSync(this.route, JSON.stringify(products));
        } catch (error) {
            console.log(error);
        }
    }
    async #sumarId() {
        try {
            let id = 0;
            const products = await this.getProducts();
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
    
    async updateProduct(id,title, description, price, thumbnail, stock) {
        try {
            let products = await this.getProducts();
            let index = products.findIndex(product => product.id == id);
            products[index].title = title;
            products[index].description = description;
            products[index].price = price;
            products[index].thumbnail = thumbnail;
            products[index].stock = stock;
            fs.writeFileSync(this.route, JSON.stringify(products));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try {
            let products = await this.getProducts();
            let index = products.findIndex(product => product.id == id);
            products.splice(index, 1);
            fs.writeFileSync(this.route, JSON.stringify(products));
        } catch (error) {
            console.log(error);
        }
    }

}

const productManager = new ProductManager();

const test = async () => {
    await productManager.addProduct('Remera', 'Remera de algodon', 1000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
    await productManager.addProduct('Pantalon', 'Pantalon de jean', 2000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
    await productManager.addProduct('Zapatillas', 'Zapatillas de cuero', 3000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
    console.log(await productManager.getProducts());
    console.log(await productManager.getProductById(1));
    await productManager.updateProduct(1, 'Remeras', 'Remeras de algodon', 5000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 20);
    await productManager.updateProduct(2, 'Pantalones', 'Pantalon de jean', 5000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 20);
    await productManager.deleteProduct(3);
    console.log(await productManager.getProducts());
};

test();