var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userdata: [],
    data: '',
    region: '',
    user: [],
    radioItems: [{
      name: '女',
      value: '女'
    },
    {
      name: '男',
      value: '男',
      checked: 'true'
    },
    ],

  },

  datachange: function (e) {
    this.setData({
      data: e.detail.value
    })
  },
  regionchange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },

  onSubmit: function (e) {
    console.log('表单被提交：');
    console.log(e.detail.value);
    var tmp = e.detail.value
    if (tmp.id == '' || tmp.password == '') {
      wx.showToast({
        title: '用户名与密码不能为空',
        icon: 'none'
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/connect.php', //服务器地址
        method: 'get',
        data: {
          action: 'adduser',
          userid: this.data.userdata.id,
          username: tmp.name,
          userimg: this.data.userdata.img,
          usersex: tmp.xingbie,
          userregion: tmp.region["0"] + tmp.region["1"] + tmp.region["2"],
          userdata: tmp.data,
          userbeizhu: tmp.beizhu,
          userpassword: this.data.userdata.password,
        },
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          wx.navigateBack({
            url: "../person/person"
          })
        }
      })
    }
  },
  onReset: function (e) {
    console.log('表单已被重置。');
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userdata: getApp().globalData.user
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