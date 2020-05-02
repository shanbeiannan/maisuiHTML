// pages/index/buyCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [{
      img: "/images/icon/quan-r.png",
      name: '优惠券',
      money:'1000',
      value: '0',
      checked:false
    },
    {
      img: '/images/icon/hongbao-r.png',
      name: '红包',
      money:'9.8',
      value: '1',
      checked: false
    },
    {
      img: '/images/icon/yongjin-r.png',
      name: '佣金',
      money:'200',
      value: '2',
      checked: false
    }
  ],
  saveMoney:0,
  payMoney:1580
},
checkboxChange: function (e) {
    
    var saveMoney=0;    
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
        
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if(checkboxItems[i].value == values[j]){
                checkboxItems[i].checked = true;
                saveMoney += Number(checkboxItems[i].money);
               
                break;
            }
        }
    }
    var payMoney = 1580;
    this.setData({
        checkboxItems: checkboxItems,
        saveMoney:saveMoney,
        payMoney:(Number(payMoney)-Number(saveMoney)).toFixed(2)
    });
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