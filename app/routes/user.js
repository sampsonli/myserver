/**
 * Created by sampson on 2016/12/25.
 */
import {login} from '../controllers/user_controller'
import express from 'express'
const user = express.Router();

user.get('/login', login)


export default user