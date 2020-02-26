//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    work: [],
    user: [],
    count: 4,

    color1: '#8470FF',
    boder1: 2,
    color2: '#aaa',
    boder2: 0,

  },


  onLoad: function() {
    var that = this;
    wx: if (getApp().globalData.aduser.id) {
      that.setData({
        flag: getApp().globalData.aduser.id,
      })
    }
  },
  onShow: function() {
    this.select();
    this.setData({
      user: getApp().globalData.user
    })

  },


  onReachBottom: function() {
    var tmp = this.data.count + 2
    this.setData({
      count: tmp,
    })
    this.select();
  },


  userpage: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../userpage/userpage?id=" + id
    })
  },


  wordpage: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../wordpage/wordpage?id=" + id
    })
  },

  tianjia: function() {
    if (this.data.user.id) {
      wx.navigateTo({
        url: "../show/show"
      })
    } else {
      wx.showToast({
        title: '请登陆',
        icon: 'none'
      })
    }

  },

  jingxuan: function() {
    var that = this;
    that.setData({
      color1: '#aaa',
      boder1: 0,
      color2: '#8470FF',
      boder2: 2,
    })
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'jingxuanselect',
        aname: '草堂雨后',
        count: this.data.count,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data),
          that.setData({
            work: res.data
          })
      }
    })
  },



  suoyou: function() {
    this.select();
    var that = this;
    that.setData({
      color2: '#aaa',
      boder2: 0,
      color1: '#8470FF',
      boder1: 2,
    })
  },

  select: function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'select',
        aname: '草堂雨后',
        count: this.data.count,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data),
          that.setData({
            work: res.data
          })
      }
    })
  },






})