class ProductManager {

    constructor() {
        this.products = [];
    }

    getproducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock) {
        const product = {
            id: this.#sumarId(),
            title,
            description,
            price,
            thumbnail,
            stock,
        }
        this.products.push(product);
    }

    #sumarId() {
        let id = 0;
        this.products.map(  (product) => {
            if (product.id > id) {
                id = product.id;
            }
        });
        return id + 1;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
          return product;
        } else {
          console.log("El producto no se ha encontrado");
        }
    }

}

const productManager = new ProductManager();

productManager.addProduct('Remera', 'Remera de algodon', 1000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
productManager.addProduct('Pantalon', 'Pantalon de jean', 2000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
productManager.addProduct('Zapatillas', 'Zapatillas de cuero', 3000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.c"m%2Fpin%2F687100000000000000%2F&p"ng=FA&usg=AOvV"aw3', 10);
console.log(productManager.getproducts());
console.log(productManager.getProductById(3));

