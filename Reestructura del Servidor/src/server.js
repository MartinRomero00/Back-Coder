import express from 'express';
import './db/database.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import morgan from 'morgan';
import './passport/local.js';
import localRouter from './routes/localRouter.js';
import userRouter from './routes/userRouter.js';
import config from '../config.js'

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
            ttl: 10
        })
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/local', localRouter);
app.use('/user', userRouter)

const PORT = config.port;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});