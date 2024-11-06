const winston = require('winston');

module.exports.createLogger = () => {
    const logLevel = process.env.LOG_LEVEL || 'debug';

    const format = winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.json()
    );

    const transports = [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/all.log' })
    ];

    return winston.createLogger({ level: logLevel, format, transports });
}