const express = require('express')
const ejs = require('ejs');
const passport = require('passport');
const StravaStrategy = require('passport-strava-oauth2').Strategy;
const stravaApi = require('strava-v3');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// strava.config(config.StravaConf);

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    // let data = await strava.athlete.get({'access_token':'500ae340729fae3cd7f38f4356743ffc629a8b35'});
    // let data = await strava.athlete.get({'access_token':'9c1fa6fcfe219fb53fc0c630411368268b69e093'}).;
    let data = new stravaApi.client();
    

    res.send(data).status(200);
});

app.post('/', async (req, res) => {

});


const server = app.listen(config.EnvVars.PORT, () => {
    console.log(`Express server started on port ${config.EnvVars.PORT}`);
});