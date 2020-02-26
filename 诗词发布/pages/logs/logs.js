var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: [],
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

  datachange: function(e) {
    this.setData({
      data: e.detail.value
    })
  },
  regionchange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  getinfo: function() {
    var that = this;
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                canIUse:false,
              })
              getApp().globalData.userInfo = res.userInfo;
              console.log('app',getApp().globalData.userInfo);
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },

  onSubmit: function(e) {
    console.log('表单被提交：');
    console.log(e.detail.value);
    var tmp = e.detail.value
    if (tmp.id == '' || tmp.password==''){
      wx.showToast({
        title: '用户名与密码不能为空',
        icon: 'none'
      })
    }else{
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'adduser',
        userid: tmp.id,
        username: this.data.userInfo.nickName,
        userimg:this.data.userInfo.avatarUrl,
        usersex:tmp.xingbie,
        userregion: tmp.region["0"] + tmp.region["1"] + tmp.region["2"],
        userdata:tmp.data,
        userbeizhu:tmp.beizhu,
        userpassword:tmp.password,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)  
        wx.navigateBack({
          url: "../denglu/denglu"
        })
      }
    })
    }
  },
  onReset: function(e) {
    console.log('表单已被重置。');
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getinfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})