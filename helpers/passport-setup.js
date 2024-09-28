const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./../model/userModel');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await userModel.findUserByUsername(username);
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await userModel.getUserModel(); // Implement your user fetching logic
    done(null, user);
});

module.exports = passport;
