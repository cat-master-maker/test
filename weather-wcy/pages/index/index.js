//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    
    // region: ['', '', ''],
    loc: 'auto_ip',
    weather: [], //实况天气
    weatherweek: [], //七日天气
    airday: [], //实况空气质量
    lifeday: [], //小时天气
    airweek: [],
    flag: true,
    flag2: true,
    imagesurl: '/image/yu.png',
    aircolor: '',
    aircolor2: [{
        text: "优",
        color: '#00CED1'
      },
      {
        text: "良",
        color: '#00FFFF'
      },
      {
        text: "轻度污染",
        color: '#EEE9E9'
      },
      {
        text: "中度污染",
        color: '#CD5555'
      },
      {
        text: "重度污染",
        color: '#BA55D3'
      },
      {
        text: "严重污染",
        color: '#5C5C5C'
      },
    ],
  },

  show: function() {
    this.setData({
      flag: false
    })
  },
  //消失

  hide: function() {
    this.setData({
      flag: true
    })
  },

  // getLocation: function () {
  //   var _this = this;
  //   wx.getLocation({
  //     success: function (res) {
  //       console.log(res.data)
  //       _this.setData({
  //         lat: res.latitude,
  //         lon: res.longitude,
  //         speed: res.speed,
  //         accuracy: res.accuracy
  //       })
  //       console.log(_this.data.lat)
  //       console.log(_this.data.lon)
  //     }
  //   })
  // },

  onSelctRge: function(e) {
    this.setData({
      loc: e.detail.value[1],
    });
    setTimeout(this.weathertoday, 300)
    setTimeout(this.scale, 300)
    setTimeout(this.changebg, )
  },


  autocity: function() {
    this.setData({
      loc: 'auto_ip'
    })
    setTimeout(this.weathertoday, 300)
    setTimeout(this.scale, 300)
    setTimeout(this.changebg,)
  },


  

  weathertoday: function() {
    var _this = this;

    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now',
      data: {
        location: _this.data.loc,
        key: '7dfd0fe2bd6949579eb5bc2563cb2c8a',
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        _this.setData({
          weather: res.data.HeWeather6["0"],
        });
        console.log("实况天气");
        console.log(_this.data.weather);

      }
    });
    this.weatherweekday();
  },
  // 天气api一周天气
  weatherweekday: function() {
    var _this = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/forecast',
      data: {
        location: _this.data.loc,
        key: '7dfd0fe2bd6949579eb5bc2563cb2c8a',
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        _this.setData({
          weatherweek: res.data.HeWeather6["0"].daily_forecast,
        });
        console.log("三天预报");
        console.log(_this.data.weatherweek);

      }
    });
    this.airday();
  },

  airday: function() {
    var _this = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/air/now',
      data: {
        location: _this.data.loc,
        key: '7dfd0fe2bd6949579eb5bc2563cb2c8a',
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        _this.setData({
          airday: res.data.HeWeather6["0"]
        });
        console.log("空气质量");
        console.log(_this.data.airday);

      }
    });
    this.life();
  },


  life: function() {
    var _this = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/lifestyle',
      data: {
        location: _this.data.loc,
        key: '7dfd0fe2bd6949579eb5bc2563cb2c8a',
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        _this.setData({
          lifeday: res.data.HeWeather6["0"].lifestyle
        });
        console.log("生活指数");
        console.log(_this.data.lifeday);
      }
    });
  },


  changecolor() {
    var _this = this;
    for (let j = 0, len = 6; j < len; j++) {
      if (_this.data.airday.air_now_city.qlty == _this.data.aircolor2[j].text) {
        _this.setData({
          aircolor: _this.data.aircolor2[j].color,
        })
      }
    };
  },

  changebg() {
    var self = this;
    if (self.data.weather.now.cond_code == '100') {
      wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#82B3C5',
        }),
        self.setData({
          imagesurl: '/image/qing.png',
        })
    } else if (self.data.weather.now.cond_code >= '101' && self.data.weather.now.cond_code <= '103') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#5298A0',
      })
      self.setData({
        imagesurl: '/image/duoyun.png',
      })
    } else if (self.data.weather.now.cond_code >= '200' && self.data.weather.now.cond_code <= '213') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#3EB8AB',
      })
      self.setData({
        imagesurl: '/image/qing.png',
      })
    } else if (self.data.weather.now.cond_code == '104') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#4C646E',
      })
      self.setData({
        imagesurl: '/image/yin.png',
      })
    } else if (self.data.weather.now.cond_code >= '300' && self.data.weather.now.cond_code <= '318') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#3FB7AC',
      })
      self.setData({
        imagesurl: '/image/yu.png',
      })
    } else if (self.data.weather.now.cond_code >= '400' && self.data.weather.now.cond_code <= '419') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#BEEBBA',
      })
      self.setData({
        imagesurl: '/image/xue.png',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#FEDCBF',
      })
      self.setData({
        imagesurl: '/image/wu.png',
      })
    }

    this.changecolor();
  },

  drawSample: function() {
    var _this = this;
    let ctx = _this.ctx;
    var data1 = 70 - parseInt(_this.data.weatherweek["0"].tmp_min) * 2
    var data2 = 70 - parseInt(_this.data.weatherweek["0"].tmp_max) * 2
    var data3 = 70 - parseInt(_this.data.weatherweek["1"].tmp_min) * 2
    var data4 = 70 - parseInt(_this.data.weatherweek["1"].tmp_max) * 2
    var data5 = 70 - parseInt(_this.data.weatherweek["2"].tmp_min) * 2
    var data6 = 70 - parseInt(_this.data.weatherweek["2"].tmp_max) * 2
    ctx.beginPath();
    ctx.moveTo(40, data1);
    ctx.lineTo(100, data2);
    ctx.lineTo(160, data3);
    ctx.lineTo(220, data4);
    ctx.lineTo(280, data5);
    ctx.lineTo(340, data6);
    ctx.setFillStyle('#FFFFFF')
    ctx.fillText(_this.data.weatherweek["0"].tmp_min + "℃", 35, data1 + 20)
    ctx.fillText(_this.data.weatherweek["0"].tmp_max + "℃", 95, data2 + 20)
    ctx.fillText(_this.data.weatherweek["1"].tmp_min + "℃", 155, data3 + 20)
    ctx.fillText(_this.data.weatherweek["1"].tmp_max + "℃", 215, data4 + 20)
    ctx.fillText(_this.data.weatherweek["2"].tmp_min + "℃", 275, data5 + 20)
    ctx.fillText(_this.data.weatherweek["2"].tmp_max + "℃", 335, data6 + 20)
    ctx.setStrokeStyle('#FFFFFF');
    ctx.lineWidth = 3;

    var grd = ctx.createLinearGradient(0, 12, 0, 30);
    grd.addColorStop(1, "#836FFF");
    grd.addColorStop("0.7", "#40E0D0");
    grd.addColorStop(0, "#FFC125");
    ctx.strokeStyle = grd;
    ctx.stroke();
    ctx.draw();
  },

  scale: function() {
    this.animation.rotate(360).scale(0.2).step().scale(1).step()
    this.setData({
      animation: this.animation.export()
    })
  },


  onLoad: function() {
    this.ctx = wx.createCanvasContext('myCanvas');
    this.weathertoday();

  },

  onReady() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    setTimeout(this.changebg, 300)
    setTimeout(this.drawSample,300)
    setTimeout(this.scale,300)
  },

  onPullDownRefresh() {
    setTimeout(this.changebg, 300)
    setTimeout(this.drawSample, 300)
    setTimeout(this.scale, 300)
  },


})