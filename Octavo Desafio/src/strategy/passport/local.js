import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import  { getById, getByEmail, userRegister, userLogin } from "../../dao/mongoDB/userDao.js";
import { logger } from "../../helpers/logger.js";

const strategyOptions = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}

const signup = async (req, email, password, done) => {
    try {
        const user = await getByEmail(email);
        if (user) {
            return done(null, false);
        }else{
            const newUser = await userRegister(req.body);
            return done(null, newUser);
        }
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }  
}

const login = async (req, email, password, done) => {
    try {
        const user = {email, password};
        const useLogin = await userLogin(user);
        if (useLogin) {
            return done(null, useLogin);
        }else{
            return done(null, false);
        }
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }  
}

const loginStrategy = new LocalStrategy(strategyOptions, login);
const signupStrategy = new LocalStrategy(strategyOptions, signup);

passport.use('signup', signupStrategy);
passport.use('login', loginStrategy);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await getById(id);
        return done(null, user);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
});