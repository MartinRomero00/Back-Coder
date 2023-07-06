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

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));


app.use(
    session({
        secret: 'secretkey',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://Admin:admin@coder-back.rmiqfhh.mongodb.net/coderback?retryWrites=true&w=majority',
            ttl: 10
        })
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/local', localRouter);
app.use('/user', userRouter)

app.listen(8080, () => {
console.log('Server is running on port 8080');
});