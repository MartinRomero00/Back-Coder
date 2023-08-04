import express from 'express';
import './dao/mongoDB/database.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import morgan from 'morgan';
import './strategy/passport/local.js';
import config from './config/config.js'
import mainRouter from './routes/index.js';
import { logger } from './helpers/logger.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));


app.use(
    session({
        secret: config.secret_session,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: config.db,
        })
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', mainRouter);


const PORT = config.port;

app.listen(PORT, () => {
logger.http(`Server is running on port ${PORT}`);
});