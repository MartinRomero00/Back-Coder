import { getAll, createProduct, deleteProduct } from "../../dao/mongoDB/productDao.js";
import { expect } from "chai";
import mongoose from "mongoose";
import { fakerES as faker} from '@faker-js/faker'


const doc = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: faker.number.int()
}

describe("Testeo de ProductDao", () => {
    before(async () => {
        await mongoose.connect("mongodb://localhost:27017/");
        await mongoose.connection.collections["products"].drop();
    });

    it("getAll() debe devolver un array vacío", async () => {
        const products = await getAll();
        expect(Array.isArray(products)).to.be.equal(true);
        expect(products).to.have.lengthOf(0);
    });

    it("createProduct() debe devolver un objeto con los datos del producto creado", async () => {
        const product = await createProduct(doc);
        expect(product).to.be.an("object");
        expect(product).to.have.property("_id");
        expect(product).to.have.property("name");
        expect(product).to.have.property("description");
        expect(product).to.have.property("price");
        expect(product).to.have.property("stock");
        expect(product.name).to.be.equal(doc.name);
        expect(product.description).to.be.equal(doc.description);
        expect(product.stock).to.be.equal(doc.stock);
    });

    it("deleteProduct() debe devolver un objeto con los datos del producto eliminado", async () => {
        const productId = await createProduct(doc);
        const { _id } = productId;
        const product = await deleteProduct(_id);
        expect(product).to.be.an("object");
        expect(product).to.have.property("_id");
        expect(product).to.have.property("name");
        expect(product).to.have.property("description");
        expect(product).to.have.property("price");
        expect(product).to.have.property("stock");
        expect(product.name).to.be.equal(doc.name);
        expect(product.description).to.be.equal(doc.description);
        expect(product.stock).to.be.equal(doc.stock);
    });
});