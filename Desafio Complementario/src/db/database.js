import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://Admin:admin@coder-back.rmiqfhh.mongodb.net/coderback?retryWrites=true&w=majority';

try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos');
} catch (error) {
    console.log(error);
}