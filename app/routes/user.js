/**
 * Created by sampson on 2016/12/25.
 */
import {login, register} from '../controllers/user_ctl'
import passport from 'passport'
import express from 'express'
const user = express.Router();

user.post('/login', passport.authenticate('local', { failureRedirect: '/api/user/login', failureFlash: true }), login)

user.get('/login', (req,res)=>{
    res.render('user/login', { user : req.user, error : req.flash('error')});
});

user.get('/register', (req,res)=>{
    res.render('user/register', { user : req.user, error : req.flash('error')});
});
user.post('/register', register);

user.get('/', (req,res)=>{
    res.json(req.user)
})

export default user