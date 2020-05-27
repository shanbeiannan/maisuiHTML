// pages/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowList:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {
        this.setData({
          systemHeight:result.windowHeight
        })
      },
    })
  },
  showList:function(e){/**点击上部页签 */
    var $current =  e.currentTarget.dataset.index;
    this.setData({
      isShowList:$current
    })
  },
  swiperChangeShow:function(e){/**swiper滑动 */
    var $current = e.detail.current;
    this.setData({
      isShowList:$current
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