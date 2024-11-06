const { config } = require('dotenv');
const app = require('./app');

config();

const initApp = async () => {
    const closeMongoConnection = async () => {
        if (app.db) {
            console.log('attempting to close mongodb connection');
            try {
                await app.db.close();
                console.log('successfully close mongodb connection');
                process.exit(0);
            } catch (err) {
                console.log('unable to close mongodb connection: ' + err);
                process.exit(0);
            }
        } else {
            console.log('exiting application');
            process.exit(0);
        }
    };

    process.on('SIGINT', closeMongoConnection);

    try {
        const { MongoClient } = require('mongodb');

        const mongoUrl = process.env.MONGO_URL;
        const client = new MongoClient(mongoUrl);
        const db = client.db('expense_tracker');

        console.log('successfully connected to mongodb');

        app.db = db;

        const web = require('./web');
        web.start();
    } catch (err) {
        console.log('error starting application: ' + err);
        process.exit(-2);
    }
};

initApp();
