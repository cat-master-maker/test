// pages/person/person.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[],
    userdata:[],
    count: 6,
    flag:false,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user: getApp().globalData.user
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
    this.setData({
      user: getApp().globalData.user
    })
    if (this.data.user.id) { this.selectuserdata();}
    
 
  },


denglu:function(){
  wx.navigateTo({
    url: '../denglu/denglu',
  })
  this.setData({
    flag:true
  })
},

  onReachBottom: function () {
    var that=this;
    var tmp = that.data.count + 2
    that.setData({
      count: tmp,
    })
    that.selectuserdata();
  },


caidan:function(){
  var that=this
  wx.showActionSheet({
    itemList: ['修改资料','退出登录'],
    success:function(res){
      if (res.tapIndex==0){
wx.navigateTo({
  url: '../xiugaiziliao/xiugaiziliao',
})
      }
      else if (res.tapIndex == 1) {
        getApp().globalData.user = ''
        that.setData({
          user:''
        })
      }
    }
  })
},


selectuserdata:function(){
  var that=this;
  wx.request({
    url: 'http://localhost:8080/connect.php', //服务器地址
    method: 'get',
    data: {
      action: 'selectuserdata',
      count:that.data.count,
      id: getApp().globalData.user.id,
    },
    header: { // 设置请求的 header
      'content-type': 'application/json'
    },
    success: function (res) {
that.setData({
  userdata:res.data,
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