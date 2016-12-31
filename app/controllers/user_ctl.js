/**
 * Created by sampson on 2016/12/25.
 */
import mongoose from 'mongoose'
import { wrap } from 'co'
const User = mongoose.model('user');

/*export const login = wrap(function *(req,resp){
    let result = yield User.find().exec();
    resp.json(result)
});*/
export const login = function(req,resp){
    console.log('hello')

    /*req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });*/
   /* wrap(function *(req,resp){
        let result = yield User.find().exec();
        resp.json(result)
    }).then(()=>{

    })*/


};
export const register = wrap(function *(req,resp){
    const user = new User({firstName: 'hello', lastName: 'world',username: 'sampson2',password: '123456',provider: 'local', email: '1232444@qq.com', phone: '2222222'});
    let result;
    try{
        result = yield user.save()
    }catch (e){
        console.log(e)
        result = e.errmsg
    }

    resp.json(result)
});