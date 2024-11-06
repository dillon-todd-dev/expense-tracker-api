const { config } = require('dotenv');
const app = require('./app');
const logger = require('./logger');

config();

const initApp = async () => {
    app.logger = logger.createLogger();

    const closeMongoConnection = async () => {
        if (app.db) {
            app.logger.debug('attempting to close mongodb connection');
            try {
                await app.db.close();
                app.logger.log.debug('successfully close mongodb connection');
                process.exit(0);
            } catch (err) {
                app.logger.error('unable to close mongodb connection: ' + err);
                process.exit(0);
            }
        } else {
            app.logger.debug('exiting application');
            process.exit(0);
        }
    };

    process.on('SIGINT', closeMongoConnection);

    try {
        const { MongoClient } = require('mongodb');

        const mongoUrl = process.env.MONGO_URL;
        const client = new MongoClient(mongoUrl);
        const db = client.db('expense_tracker');

        app.logger.debug('successfully connected to mongodb');

        app.db = db;

        const web = require('./web');
        web.start();
    } catch (err) {
        app.logger.error('error starting application: ' + err);
        process.exit(-2);
    }
};

initApp();
