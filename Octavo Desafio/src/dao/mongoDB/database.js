import mongoose from 'mongoose';
import config from '../../config/config.js'
import { logger } from '../../helpers/logger.js';

const connectionString = config.db;
try {
    await mongoose.connect(connectionString);
    logger.info('Conectado a la base de datos');
} catch (error) {
    logger.error(error);
    throw new Error(error);
}