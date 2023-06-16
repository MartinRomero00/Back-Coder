import express from 'express';
import userRouter from './routes/userRouter.js';
import './db/database.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import './passport/local.js';
import './passport/github.js';
import localRouter from './routes/localRouter.js';
import githubRouter from './routes/githubRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(
    session({
        secret: 'secretkey',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 10000
        },
        store: MongoStore.create({ 
            mongoUrl: 'mongodb+srv://Admin:admin@coder-back.rmiqfhh.mongodb.net/coderback?retryWrites=true&w=majority',
        ttl: 10 })
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/local', localRouter);
app.use('/github', githubRouter);

app.listen(8080, () => {
console.log('Server is running on port 8080');
});