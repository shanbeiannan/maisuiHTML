// pages/product/fabiaopingjia.js
var stars = [{
    image: '/images/icon/xing-g.png',
    id: 0,
    mark: '差'
  },
  {
    image: '/images/icon/xing-g.png',
    id: 1,
    mark: '一般'
  },
  {
    image: '/images/icon/xing-g.png',
    id: 2,
    mark: '满意'
  },
  {
    image: '/images/icon/xing-g.png',
    id: 3,
    mark: '很满意'
  },
  {
    image: '/images/icon/xing-g.png',
    id: 4,
    mark: '非常满意'
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark: '非常满意',
    stars: stars,
    fill: '/images/icon/xing-r.png',
    default: "/images/icon/xing-g.png"
  },
  onStarSelect: function (e) {
    //点选操作后
    var starIndex = e.currentTarget.dataset.id;
    var starMark = e.currentTarget.dataset.mark;
  
    for (var i = 0; i <= starIndex; i++) {//被选中的星星和前面的星星
      stars[i].image = "/images/icon/xing-r.png";
    }
    for (var i = starIndex + 1; i < 5; i++) {//被选中的星星后面的星星
      stars[i].image = "/images/icon/xing-g.png";
    }
    this.setData({
      mark: starMark,
      stars: stars
    })
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