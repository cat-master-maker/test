// pages/person/person.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmpid:'',
    user: [],
    userdata: [],
    count: 6,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let id = options.id;
    this.selectuserdata(id); 
    this.selectid(id);
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {

  },




  onReachBottom: function () {
    var that = this;
    var tmp = that.data.count + 2
    that.setData({
      count: tmp,
    })
    that.selectuserdata();
  },


 selectid:function(userid){
   var that = this;
   wx.request({
     url: 'http://localhost:8080/connect.php', //服务器地址
     method: 'get',
     data: {
       action: 'selectid',
       text: userid,
     },
     header: { // 设置请求的 header
       'content-type': 'application/json'
     },
     success: function (res) {
       that.setData({
         user: res.data,
       })
       console.log(that.data.user)
     }
   })
 },


  selectuserdata: function (tmpid) {

    var that = this;
    wx.request({
      url: 'http://localhost:8080/connect.php', //服务器地址
      method: 'get',
      data: {
        action: 'selectuserdata',
        count: that.data.count,
        id: tmpid,
      },
      header: { // 设置请求的 header
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          userdata: res.data,
        })
        console.log(that.data.userdata)
      }
    })
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