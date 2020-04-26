let urls = require("../../api/urls")

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail:[],
     loading:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.loading){
      wx.showLoading()
    }
    let {id} = options
      wx.request({
        url: `https://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`,
        method:"GET",
        header:{
          'content-type':'aplication/text'
        },
        success:res=>{
          console.log(res.data)
          if(res.statusCode==200){
           this.setData({
             detail:res.data,
             loading:false
           })
           if(!this.data.loading){
            wx.hideLoading()
            }
          }
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})