 !function(e) {
    var n = {
        title: "江南布衣+",
        desc: "江南布衣（股票代码:03306.HK) 二零一七/一八财年中期业绩发布",
        link: window.location.origin + "/jnbymeeting/jnbynz-cn/index.html",
        imgUrl: window.location.origin + "/jnbymeeting/jnbynz-cn/img/share-bg.jpg"
    },
    i = {
        userid: "",
        debug: !1,
        appId: "",
        timestamp: "",
        nonceStr: "",
        signature: "",
        apis: ["hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
    },
    t = !1;
    e.wechat = {
        init: function(e) {
            wx.config({
                debug: e.debug,
                appId: e.appId,
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: e.apis
            })
        },
        getWxConfig: function() {
            // $.ajax({
            //     url: "/jnbymeeting/Jnbymeeting/getJsApiSign",
            //     type: "GET",
            //     data: {
            //         url: e.location.href.split("#")[0]
            //     },
            //     async: !1,
            //     dataType: "json",
            //     success: function(e) {
            //         console.log('获取的接口参数',e);
            //         $.extend(i, e.data);
            //     }
            // })
        },
        Handler: function(e) {
            this.getWxConfig(),
            this.init(i),
            wx.ready(function() {
                t = !0;
                var o = n.link + i.userid;
                wx.hideMenuItems({
                    menuList: ["menuItem:share:weiboApp", "menuItem:share:facebook",  "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"]
                }),
                wx.onMenuShareQQ({
                    title: n.title,
                    desc: n.desc,
                    imgUrl: n.imgUrl,
                    success: function() {},
                    cancel: function() {}
                }),
                wx.onMenuShareQZone({
                    title: n.title,
                    desc: n.desc,
                    imgUrl: n.imgUrl,
                    success: function() {},
                    cancel: function() {}
                }),
                wx.onMenuShareTimeline({
                    title: n.title,
                    imgUrl: n.imgUrl,
                    link:n.link,
                    success: function() {},
                    cancel: function() {}
                }),
                wx.onMenuShareAppMessage({
                    title: n.title,
                    desc: n.desc,
                    imgUrl: n.imgUrl,
                    link:n.link,
                    type: "link",
                    dataUrl: "",
                    success: function() {},
                    cancel: function() {}
                }),
                e && e()
            })
        },
        wxIsReady: function() {
            return t
        }
    }
}(window);
