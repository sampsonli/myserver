/**
 * Created by sampson on 2016/12/25.
 */
import {login, register} from '../controllers/user_ctl'
import express from 'express'
const user = express.Router();

user.get('/login', login)
user.get('/register', register)


export default user