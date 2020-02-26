//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    work: [],
    user: [],
    count: 4,
  },




  tuichu: function () {
    wx.redirectTo({
      url: "../denglu/denglu"
    })
  },
  chaxunyonghu: function () {
    wx.redirectTo({
      url: "../adInterface/adinterface"
    })
  },

  fabuhuati: function () {
    wx.redirectTo({
      url: "../disadd/disadd"
    })
  },

  jingxuan: function (e) {
    console.log('执行');
    let tmpid = e.currentTarget.dataset.id;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'adjingxuan',
        id: tmpid,
      },
      header: {// 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.select();
      }
    })
  },


  disjingxuan: function (e) {
    console.log('执行');
    let tmpid = e.currentTarget.dataset.id;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'disjingxuan',
        id: tmpid,
      },
      header: {// 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.select();
      }
    })
  },

  onLoad: function () {
   
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

  tianjia: function () {
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




  select: function () {
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



