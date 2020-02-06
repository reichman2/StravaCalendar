const express = require('express')
const ejs = require('ejs');
const passport = require('passport');
const StravaStrategy = require('passport-strava-oauth2').Strategy;
const strava = require('strava-v3');
// const mongoose = require('mongoose'); // TODO: Install mongoose and setup MongoDB to hold valid users.

const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let data;
    strava.athlets

    res.send(data);
});