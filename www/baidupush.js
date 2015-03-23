var cordova = require('cordova'),
    exec = require('cordova/exec');

var BaiduPush = function() {
    this.registered = false;
};
BaiduPush.prototype.init = function(api_key)
{
    exec(baiduPush.successFn, baiduPush.failureFn, 'BaiduPush', 'init', [api_key]);
};

BaiduPush.prototype.successFn = function(info)
{
    console.log(info);
    if(info){
        baiduPush.registered = true;
        cordova.fireDocumentEvent("cloudPushRegistered", info);
    }
};

BaiduPush.prototype.failureFn = function(info)
{
    baiduPush.registered = false;
};

var baiduPush = new BaiduPush();

module.exports = baiduPush;