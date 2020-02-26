//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    work: [],
    user: [],
    count: 4,

  },


  huatipage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../huatipage/huatipage?id=" + id
    })
  },


  onLoad: function () {
    var that = this;
    wx: if (getApp().globalData.aduser.id) {
      that.setData({
        flag: getApp().globalData.aduser.id,
      })
    }
  },
  onShow: function () {
    this.select();
    this.setData({
      user: getApp().globalData.user
    })

  },


  onReachBottom: function () {
    var tmp = this.data.count + 2
    this.setData({
      count: tmp,
    })
    this.select();
  },

  

  select: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'selecthuati',
        aname: '草堂雨后',
        count: this.data.count,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
      },
      header: {// 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data),
          that.setData({
            work: res.data
          })
      }
    })
  },






})



