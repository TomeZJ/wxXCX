// pages/trigonometry.js
const plugin = requirePlugin("DimensionalShow")
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    picsWeblink: [
      "https://html51.com/data/attachment/portal/201805/05/213823naickajkaiiisiil.jpeg"
    ]
  },
  downloadFile: function (src) {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: src,
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath);
          } else {
            reject({ statusCode, errMsg });
          }
        },
        fail(err) {
          reject(err);
        }
      });
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let funtmp, profun = [], that = this

    this.data.picsWeblink.forEach((imageurl, index, array) => {
      funtmp = that.downloadFile(imageurl)
      profun.push(
        funtmp.then((src) => {
          return src
        })
      );
    });

    Promise.all(profun).then(function (srcs) {
      that.setData({
        'pics': srcs
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  init() {
    this.ele = document.createElement('canvas')
    document.body.appendChild(this.ele)
    this.ctx = this.ele.getContext('2d');
    this.width = this.ele.width = window.innerWidth * 2;
    this.height = this.ele.height = window.innerHeight * 2;
    this.ele.style.width = "100%";
    this.ele.style.height = this.ele.height * 0.5 + 'px';
    this.ctx = this.ele.getContext('2d');
    this.ctx.scale(2, 2)
    return this.ctx
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