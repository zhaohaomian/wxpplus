// pages/index/index.js
let indexAjax = require('../../models/index.js')
let random = require('../../utils/random.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    articleList: [],
    markList: [],
    getMore:'',
    magazineId: 0,
    loading:false
    
  },
  getData(magazineId){
    // 文章列表
    var getIndexArticleList = indexAjax.getIndexArticleList(magazineId);
    // 顶部推荐图
    var getRecommendInfo = indexAjax.getRecommendInfo(magazineId);
    // 标签数据
    var getMarkTypeList = indexAjax.getMarkTypeList(magazineId);
    //数据还没请求到的时候显示loading 
    Promise.all([getRecommendInfo, getIndexArticleList, getMarkTypeList]).then(data => {
        this.setData({
          recommend:data[0],
          articleList:data[1],
          markList:data[2],
          loading:true
        });
    })
  },
  onNav(e){
    this.getData(e.detail.targetIndex)
    this.setData({
      magazineId: e.detail.targetIndex
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration:0
    })
    this.setData({
      recommend: {},
      articleList: [],
      markList: []    });
  },
  onCatalog(){
    wx.switchTab({
      url:"/pages/catalog/catalog",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    this.getData();
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
     this.setData({
       getMore: random(20)
     })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})