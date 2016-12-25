/**
 * Created by sampson on 2016/12/25.
 */
import mongoose from 'mongoose'
import { wrap } from 'co'
const User = mongoose.model('user');

export const login = wrap(function *(req,resp){
    let result = yield User.find({username: /hello/}, 'username email').exec();
    resp.json(result)
});

export const register = wrap(function *(req,resp){
    const user = new User({username: 'hello', password: 'world',sex: '男', email: '123444@qq.com', phone: '2222222'});
    resp.json(yield user.save())
});