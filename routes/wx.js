var express = require('express');
var router = express.Router();
var wechat = require('wechat');
let fetch = require('node-fetch');
var WechatAPI = require('wechat-api');
let config = require('../config');
let app = new WechatAPI(config.appid, config.appsecret);

/* GET users listing. */
router.all('/', wechat(config.token, function (req, res, next) {
    // message is located in req.weixin
    var message = req.weixin;
    if(message.MsgType == 'text'){
        fetch(`https://op.juhe.cn/robot/index?key=dd3eaeb4eb005860d134561d933ff883&info=${encodeURI(text)}`, {
            method: 'GET',
        }).then(resp=>resp.text()).then(data=>{
            if(data.error_code === 0){
                res.reply({ type: "text", content: data.result.text});
            }
        })

    }
}));

module.exports = router;
