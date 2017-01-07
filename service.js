
import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import mongo from 'connect-mongo'
import flash from 'connect-flash'
import mongoose from 'mongoose'
import passport from 'passport'
import {Strategy as LocalStrategy } from 'passport-local'


import './app/config/db'
import routes from './app/routes'

const MongoStore = mongo(session);
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'hello world',
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

const User = mongoose.model('user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public'),{
  maxAge: '1h'
}));

app.use('/api',routes);

export default app

