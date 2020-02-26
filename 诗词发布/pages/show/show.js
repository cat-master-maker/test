// pages/demo02/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'', //上传图片的路径地址
    url:'',
  },


  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },


  onSubmit: function (e) {
    console.log(e.detail.value);
    var tmp = e.detail.value
    if (tmp.title == '' || tmp.word == '') {
      wx.showToast({
        title: '标题与内容不能为空',
        icon: 'none'
      })
    }
    else {
      wx.request({
        url: 'http://localhost:8080/connect.php', //服务器地址
        method: 'get',
        data: {
          action:'updata',
          writerid: getApp().globalData.user.id,
          title: tmp.title,
          word: tmp.word,
          id:this.createRandomId(),
          url:this.data.url,
          userimg: getApp().globalData.user.img,
          username: getApp().globalData.user.name,
        },
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          wx.navigateBack({
            url: "../index/index"
          })
        }
      })
    }
  },

    createRandomId: function() {
      return (new Date()).getTime();
    },

  //选择文件
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let src = res.tempFilePaths[0]
        that.setData({ 
          src:src,})
        that.uploadFile()
      }
    })
  },
  //上传文件
  uploadFile: function () {
    var that = this
    //获取图片路径地址
    let src = this.data.src
    //尚未选择图片
    if (src == '') {
      wx.showToast({
        title: '请先选择文件！',
        icon: 'none'
      })
    }
    //准备上传文件
    else {
      //发起文件上传请求
      var uploadTask = wx.uploadFile({
        url: 'http://localhost:8080/test.php', 
        filePath: src,
        name: 'file',
        formData:{
          writerid: getApp().globalData.user.id,
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            url: res.data,
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