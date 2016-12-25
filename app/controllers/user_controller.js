/**
 * Created by sampson on 2016/12/25.
 */
import mongoose from 'mongoose'
import { wrap } from 'co'
const User = mongoose.model('user');

export const login = wrap(function *(req,resp){
    let result = yield User.find({username: 'sampson'}, 'username email').exec();
    resp.json(result)
});

export const register = wrap(function *(req,resp){
    const user = new User({firstName: 'hello', lastName: 'world',username: 'sampson',password: '123456',provider: 'local1', email: '123444@qq.com', phone: '2222222'});
    let result;
    try{
        result = yield user.save()
    }catch (e){
        result = e
    }

    resp.json(result)
});