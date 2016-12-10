var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var WechatAPI = require('wechat-api');
let config = require('../config');
let app = new WechatAPI(config.appid, config.appsecret);


router.all('/', wechat(config.token, function (req, res, next) {
    // message is located in req.weixin
    var message = req.weixin;
    if(message.MsgType == 'text'){
        res.reply({ type: "text", content: "you input " + message.Content});
    }
}));

module.exports = router;
