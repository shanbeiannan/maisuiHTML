// pages/index/mytoast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    isShowRedBag_one: false,
    isShowRedBag_two: false,
    isGetQuan: false,
    isShowQuan:false,
    isShowGive: false,
    isShowToast: false,
    isShowShare:false
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
          winW: result.windowWidth,
          winH: result.windowHeight,
        })
      },
    })
  },
  onOpenDilog_one: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: true,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: false,
      isShowShare: false
    })
  },
  onOpenDilog_two: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: true,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: false,
      isShowShare: false
    })
  },
  onGetQuan: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan:true ,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: false,
      isShowShare: false
    })
  },

  onShowQuan: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:true,
      isShowGive: false,
      isShowToast: false,
      isShowShare: false
    })
  },
  onShowGive: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: true,
      isShowToast: false,
      isShowShare: false
    })
  },
  onShowToast: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: true,
      isShowShare: false
    })
  },
  onShowShare: function (e) {
    this.setData({
      isShow: true,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: false,
      isShowShare: true
    })
  },
  onNoAgree:function(e){

    console.log("onNoAgree");
  },

  onAgree:function(e){

    console.log("onAgree");
  },


  onClose: function (e) {
    this.setData({
      isShow: false,
      isShowRedBag_one: false,
      isShowRedBag_two: false,
      isGetQuan: false,
      isShowQuan:false,
      isShowGive: false,
      isShowToast: false,
      isShowShare: false
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