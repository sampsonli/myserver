/**
 * Created by sampson on 2016/12/25.
 */
import {login, register} from '../controllers/user_ctl'
import passport from 'passport'
import express from 'express'
const user = express.Router();

user.post('/login', passport.authenticate('local', { failureRedirect: '/', failureFlash: true }), login)
user.get('/register', register)


export default user