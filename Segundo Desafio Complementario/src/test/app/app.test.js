import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker} from '@faker-js/faker'

const doc = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: faker.number.int()
}

const doc2 = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
}

describe('Product routes', () => {

    beforeEach(async () => {
        await mongoose.connection.collections['products'].drop();
    })
    
    test('POST /product', async () => {
        const response = await request(app).post('/api/product').send(doc)
        expect(response.statusCode).toBe(200)
        expect(response.body._id).toBeDefined()
        expect(response.body.name).toBe(doc.name)
        expect(response.body.description).toBe(doc.description)
    })

    test('GET /product', async () => {
        const response = await request(app).get('/api/product')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(0)
        const responsePost = await request(app).post('/api/product').send(doc)
        expect(responsePost.statusCode).toBe(200)
        const responseGet = await request(app).get('/api/product')
        expect(responseGet.body).toHaveLength(1)
    })

    test('GET /product/:id', async () => {
        const responsePost = await request(app).post('/api/product').send(doc)
        expect(responsePost.statusCode).toBe(200)
        const responseGet = await request(app).get(`/api/product/${responsePost.body._id}`)
        expect(responseGet.statusCode).toBe(200)
        expect(responseGet.body._id).toBeDefined();
        expect(responseGet.body._id).toBe(responsePost.body._id)
    })
})

describe('Session routes', () => {
    
    beforeEach(async () => {
        await mongoose.connection.collections['users'].drop();
    })

    test('POST /register', async () => {
        const response = await request(app).post('/api/local/register').send(doc2)
        expect(response.statusCode).toBe(200)
        const msgExpected = 'User created successfully'
        expect(response.body.message).toBe(msgExpected)
    })

    test('POST /login', async () => {
        const response = await request(app).post('/api/local/register').send(doc2)
        expect(response.statusCode).toBe(200)
        const response2 = await request(app).post('/api/local/login').send({
            email: doc2.email,
            password: doc2.password
        })
        expect(response2.statusCode).toBe(200)
        expect(response2.body.message).toBe('User logged in successfully')
        expect(response2.body.user).toBeDefined()
        expect(response2.body.user.id).toBeDefined()
        expect(response2.body.user.Nombre).toBe(doc2.first_name)
        expect(response2.body.user.Apellido).toBe(doc2.last_name)
        expect(response2.body.user.Correo).toBe(doc2.email)
        expect(response2.body.user.cart).toBeDefined()
    })

})
