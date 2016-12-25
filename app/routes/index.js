/**
 * Created by sampson on 2016/12/25.
 */
import express from 'express'
import user from './user'
const router = express.Router();

router.use('/user', user);

export default router
