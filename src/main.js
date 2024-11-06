const { config } = require('dotenv');
const app = require('./app');
const logger = require('./logger');

config();

const initApp = async () => {
    const log = logger.createLogger();
    app.logger = log;

    const closeMongoConnection = async () => {
        if (app.db) {
            log.debug('attempting to close mongodb connection');
            try {
                await app.db.close();
                log.debug('successfully close mongodb connection');
                process.exit(0);
            } catch (err) {
                log.error('unable to close mongodb connection: ' + err);
                process.exit(0);
            }
        } else {
            log.debug('exiting application');
            process.exit(0);
        }
    };

    process.on('SIGINT', closeMongoConnection);

    try {
        const { MongoClient } = require('mongodb');

        const mongoUrl = process.env.MONGO_URL;
        const client = new MongoClient(mongoUrl);
        const db = client.db('expense_tracker');

        log.debug('successfully connected to mongodb');

        app.db = db;

        const web = require('./web');
        web.start();
    } catch (err) {
        log.error('error starting application: ' + err);
        process.exit(-2);
    }
};

initApp();
