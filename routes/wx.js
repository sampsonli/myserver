var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var WechatAPI = require('wechat-api');
let config = require('../config');
let app = new WechatAPI(config.appid, config.appsecret);

/* GET users listing. */
router.get('/', wechat(config.token, function (req, res, next) {
    // message is located in req.weixin
    var message = req.weixin;
    console.log(message);
}));

module.exports = router;
