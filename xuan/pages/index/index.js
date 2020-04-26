let urls = require("../../api/urls")

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hot:[],
    top:[],
    quick:[],
  
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: urls.default.hot,
      method:"GET",
      header:{
        'content-type':'aplication/text'
      },
      data:{
        start:0,
        count:6
      },
      success:res=>{
        console.log(res.data.subjects)
        if(res.statusCode===200){
          this.setData({
            hot:res.data.subjects
          })
         
        }
      }
    })
    wx.request({
      url: urls.default.top,
      method:"GET",
      header:{
        'content-type':'aplication/text'
      },
      data:{
        start:0,
        count:6
      },
      success:res=>{
        console.log(res.data.subjects)
        if(res.statusCode===200){
          this.setData({
            top:res.data.subjects
          })
         
        }
      }
    })
    wx.request({
      url: urls.default.quick,
      method:"GET",
      header:{
        'content-type':'aplication/text'
      },
      data:{
        start:0,
        count:6
      },
      success:res=>{
        console.log(res.data.subjects)
        if(res.statusCode===200){
          this.setData({
            quick:res.data.subjects
          })
         
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  detail(e){
    console.log(e)
     var {ind} = e.currentTarget.dataset
     wx.navigateTo({
       url: `/pages/detail/detail?id=${ind}`,
     })
  }
})
