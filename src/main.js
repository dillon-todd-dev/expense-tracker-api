const { config } = require('dotenv');
const app = require('./app');

config();

const initApp = () => {
    const closeMongoConnection = () => {
        if (app.db) {
            console.log('closing mongodb connection');
            app.db.close(true).then(() => {
                console.log('exiting application');
                process.exit(0);
            })
        } else {
            console.log('exiting application');
            process.exit(0);
        }
    };

    process.on('SIGINT', closeMongoConnection);

    try {
        const { MongoClient } = require('mongodb');

        const mongoUrl = process.env.MONGO_URL;
        MongoClient.connect(mongoUrl).then((db) => {
            console.log('connected to db');
            app.db = db;

            const web = require('./web');
            web.start();
        }, (err) => {
            console.error('error connecting to mongodb');
            process.exit(-1);
        });
    } catch (err) {
        console.log('error starting application');
        process.exit(-2);
    }
};

initApp();
