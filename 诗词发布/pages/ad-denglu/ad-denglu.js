// pages/aiminister denglu/ad denglu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onSubmit: function (e) {
    console.log(e.detail.value);
    var tmp = e.detail.value
    if (tmp.id == '' || tmp.passname == '') {
      wx.showToast({
        title: '用户名与密码不能为空',
        icon: 'none'
      })
    }
    else {
      wx.request({
        url: 'http://localhost:8080/connect.php', //服务器地址
        method: 'get',
        data: {
          action: 'adsignin',
          id: tmp.id,
          password: tmp.password,
        },
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.message == '登录成功') {
            getApp().globalData.aduser = res.data.data[1]
            console.log('app', getApp().globalData.aduser)
            wx.redirectTo({
              url: "../adInterface/adinterface"
            })


          } else {
            wx.showToast({
              title: '用户名，密码不存在',
              icon: 'none'
            })
          }

        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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