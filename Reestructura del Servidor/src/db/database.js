import mongoose from 'mongoose';
import config from '../../config.js'

const connectionString = config.db;
try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos');
} catch (error) {
    console.log(error);
}