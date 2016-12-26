/**
 * Created by lichun on 2016/12/26.
 */
import {all} from '../controllers/wx_ctl'
import express from 'express'
const wx = express.Router();

wx.all('/', all)


export default wx