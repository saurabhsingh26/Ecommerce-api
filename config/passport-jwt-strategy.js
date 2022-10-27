const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Admin = require('../models/admin');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "api",
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){

    Admin.findById(jwtPayload._id, function(err, admin){
        if(err){console.log('Error in finding admin from JWT'); return }

        if(admin){
            return done(null, admin);
        }else{
            return done(null, false)
        }
    })
}));

module.exports = passport;