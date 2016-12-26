import { wrap } from 'co'
import wechat from 'wechat'
import fetch from 'node-fetch'
import WechatAPI from 'wechat-api'
import config from '../config'

let app = new WechatAPI(config.appid, config.appsecret);


export const all = wechat(config.token, function (req, res, next){
    // message is located in req.weixin
    var message = req.weixin;
    if (message.MsgType == 'text') {

        askQuestion(message.Content, message.FromUser, (msg)=>{
            res.reply({type: "text", content: msg});
        })
    } else if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            res.reply({type: "text", content: '你好，请问有什么需要帮忙的吗？'});
        }
        if (message.Event === 'unsubscribe') {
            res.reply({type: "text", content: '感谢你的关注，欢迎下次再来。。。'});
        }
    } else if (message.MsgType === 'voice') {
        askQuestion(message.Recognition, message.FromUser, (msg)=>{
            res.reply({type: "text", content: msg});
        })
    }
})


function askQuestion(text, from, cb) {
    fetch(`https://op.juhe.cn/robot/index?key=dd3eaeb4eb005860d134561d933ff883&info=${encodeURI(text)}&userid=${from}`, {
        method: 'GET',
    }).then(resp=>resp.json()).then(data=> {
        if (data.error_code === 0) {
            cb(data.result.text.replace('/图灵机器人/a', '小春子'))
        } else {
            console.error(data.reason);
            cb('\ue056')
        }
    }).catch(err=> {
        console.error(err);
        cb('我现在很忙，稍后再叫我')

    })
}

