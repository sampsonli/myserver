var express = require('express');
var router = express.Router();
var wechat = require('wechat');
let fetch = require('node-fetch');
var WechatAPI = require('wechat-api');
let config = require('../config');
let app = new WechatAPI(config.appid, config.appsecret);


router.all('/', wechat(config.token, function (req, res, next) {
    // message is located in req.weixin
    var message = req.weixin;
    if(message.MsgType == 'text'){
        fetch(`https://op.juhe.cn/robot/index?key=dd3eaeb4eb005860d134561d933ff883&info=${encodeURI(message.Content)}&userid=${message.FromUser}`, {
            method: 'GET',
        }).then(resp=>resp.json()).then(data=>{
            if(data.error_code === 0){
                res.reply({ type: "text", content: data.result.text});
            }else {
                console.error(data.reason);
                res.reply({ type: "text", content: '我爱你 '});
            }
        }).catch(err=>{
            console.error(err)
        })

    }else if(message.MsgType === 'device_event'){
        if (message.Event === 'subscribe_status') {
            res.reply({ type: "text", content: '你好，请问有什么需要帮忙的吗？'});
        }
        if (message.Event === 'unsubscribe_status') {
            res.reply({ type: "text", content: '感谢你的关注，欢迎下次再来。。。'});
        }
    }
}));


fetch(`https://op.juhe.cn/robot/index?key=dd3eaeb4eb005860d134561d933ff883&info=${encodeURI('我')}`, {
    method: 'GET',
}).then(resp=>resp.json()).then(data=>{
    console.log(data);
}).catch(err=>{
    console.error(err)
})
console.log(encodeURI('我'));


module.exports = router;
