const StravaStrategy = require('passport-strava-oauth2').Strategy;
const stravaConfig = require('../StravaConfig');


const UserStrategy = new StravaStrategy(stravaConfig, (accessToken, refreshToken, profile, done) => {
    const stravaId = profile.id;
    const name = profile.displayName;
    const email = profile.emails[0].value;

    
});

