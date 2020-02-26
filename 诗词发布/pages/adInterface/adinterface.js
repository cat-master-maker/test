// pages/adInterface/adinterface.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   user:[],
   userword:[],


    radioItems: [{
      name: '用户名',
      value: 'selectname'
    },
    {
      name: 'id',
      value: 'selectid',
      checked: 'true'
    },
    ],
  },


fabuhuati:function(){
  wx.redirectTo({
    url: "../disadd/disadd"
  })
},

tuichu:function(){
  wx.redirectTo({
    url: "../person/person"
  })
},

  adjingxuan: function () {
    wx.redirectTo({
      url: "../adjingxuan/adjingxuan"
    })
  },

  onSubmit: function (e) {
    console.log('表单被提交：');
    console.log(e.detail.value);
    var that=this;
    var tmp = e.detail.value
    if (tmp.type == '' || tmp.text == '') {
      wx.showToast({
        title: '查询内容不能为空',
        icon: 'none'
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/connect.php', //服务器地址
        method: 'get',
        data: {
          action: tmp.type,
          text: tmp.text,
        },
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
         that.setData({
           user: res.data,
         })
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