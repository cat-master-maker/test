//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },

addenglu:function(){
  wx.redirectTo({
    url: '../ad-denglu/ad-denglu',
  })
},

  zhuce: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
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
          action: 'signin',
          id: tmp.id,
          password: tmp.password,
        },
        header: { // 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.message == '登录成功') {
            getApp().globalData.user = res.data.data[1]
            console.log('app', getApp().globalData.user)
            wx.navigateBack({
              url: "../person/person"
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





  onLoad: function () {
  },

})



