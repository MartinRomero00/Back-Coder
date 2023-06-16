import {Strategy as GitHubStrategy} from 'passport-github2';
import passport from 'passport';
import { getByEmail, userRegister } from '../dao/userDao.js';


const strategyOptions = {
    clientID: 'Iv1.6dbe1c4e7b1dc171',
    clientSecret: '6e53183bbece414221b7d4af60f640f3e5c87e5b',
    callbackURL: 'http://localhost:8080/github/profile'
}

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile);
        const email = profile._json.email;
        const user = await getByEmail(email);
        if (user) {
            return done(null, user);
        }else{
            const newUser = await userRegister({
                first_name: profile._json.name,
                last_name: profile._json.name,
                email: profile._json.email,
                password: " ",
                isGithub: true,
            });
            return done(null, newUser);
        }
    } catch (error) {
        console.log(error);
    }
}

passport.use('github', new GitHubStrategy(strategyOptions, registerOrLogin));
