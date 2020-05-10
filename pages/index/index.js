// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winW:0,
    winH:0,
    isShow:false,
    isShowRedBag:false,
    isShowQuan:false
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
          winW:result.windowWidth,
          winH:result.windowHeight,
        })
      },
    })
    
    

  },
  onOpenDilog:function(e){
    this.setData({
      isShow:true,
      isShowQuan:false,
      isShowRedBag:true
    })
  },
  onOpenQuan:function(e){
    this.setData({
      isShow:true,
      isShowQuan:true,
      isShowRedBag:false
    })
  },
  onClose:function(e){
    this.setData({
      isShow:false,
      isShowRedBag:false,
      isShowQuan:false
    })
  },
  onLook:function(events){
    wx.navigateTo({
      url: '/pages/my/mycoupan',
      complete: (res) => {},
      events: events,
      fail: (res) => {},
      success: (result) => {},
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
,
onTabBar:function(){

  wx.reLaunch({
    url: '/pages/my/index',
    complete: (res) => {},
    fail: (res) => {},
    success: (res) => {},
  })

}
  
})