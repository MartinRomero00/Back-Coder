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
import { __dirname } from './path.js';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { info } from './docs/info.js';

const app = express();
const specs = swaggerJSDoc(info);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


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
console.log(`Server is running on port ${PORT}`);
});