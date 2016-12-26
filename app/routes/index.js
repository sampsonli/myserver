/**
 * Created by sampson on 2016/12/25.
 */
import express from 'express'
import user from './user'
import wx from './wx'
const router = express.Router();

router.use('/user', user);
router.use('/wx', wx);

export default router
