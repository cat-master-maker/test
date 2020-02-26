// pages/wordpage/wordpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    huatidata: [],
    userdata: [],
    comment: [],
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.selecthuatione(id);
    this.selecthuaticomment(id);

  },


  shanchu: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.id)
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'deletehuaticomment',
        id: e.currentTarget.dataset.id,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.selecthuaticomment(that.data.id);
      }
    })
  },


  selecthuaticomment: function (tmpid) {
    var that = this;
    that.setData({
      id: tmpid
    })
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'selecthuaticomment',
        huatiid: tmpid,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          comment: res.data
        })
      }
    })
  },

  onSubmit: function (e) {
    var that = this
    if (getApp().globalData.user.id) {
      that.setData({
        userdata: getApp().globalData.user
      })
      if (e.detail.value.text !== '') {
        console.log(e.detail.value);
        wx.request({
          url: 'http://localhost:8080/connect.php', //服务器地址
          method: 'get',
          data: {
            action: 'addhuaticomment',
            userid: that.data.userdata.id,
            huatiid: that.data.huatidata.data["0"].id,
            text: e.detail.value.text,
            id: that.createRandomId(),
            userimg: that.data.userdata.img,
            username: that.data.userdata.name,
          },
          header: { // 设置请求的 header
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data)
            that.selecthuaticomment(that.data.id);
          }
        })
      } else {
        wx.showToast({
          title: '内容不能为空',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'none'
      })
    }
  },

  createRandomId: function () {
    return (new Date()).getTime();
  },

  selecthuatione: function (tmpid) {

    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'selecthuatione',
        id: tmpid,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          huatidata: res.data,
        })
        console.log(that.data.huatidata)
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