import winston from 'winston';

const logConfig = {
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({
            level: 'info',
            filename: './src/logs/app.log'
        })
    ],
    format: winston.format.combine(
        winston.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
        winston.format.colorize({ all: true })
    )
}

export const logger = winston.createLogger(logConfig);
