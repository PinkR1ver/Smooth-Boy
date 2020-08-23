var app = getApp()
Page({
  data: {
    currentTab: 0,
  },

  onLoad: function (options) {
 
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  tabNav: function (e) {
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      var showMode = e.currentTarget.dataset.current == 0;
      this.setData({
        currentTab: e.currentTarget.dataset.current,
      })
    }
  },
  onLoad: function (options) {
    // 这块是获取点击详情的时候，通过options来接收的id
    let detId = options.id;
    let _this = this;
    _this.setData({
      collectData : detId//把获取的id存到data中，当作一个变量供下边调用
    })
    _this.getCollected();//此方法是：页面加载时，获取缓存中的状态
  },
  getCollected(){
    let CollectState = wx.getStorageSync("_collect");//获取全部文章缓存状态
    //这里我们做一个判断，如果缓存中有这个值，取到id对应在缓存中的状态，存到data中，
    //如果没有这个值，把id对应在缓存中的状态设置为false
    if(CollectState){// 判断如果缓存中有这个值 
      // 获取当前文章对应在缓存中的状态
      let collcetState = CollectState[this.data.collectData];
      this.setData({
        isShow:collcetState//把这个状态存到data中
      })
    }else{
      let CollectState= {};
      CollectState[this.data.collectData] = false;//没有这个值，默认把点赞的这个状态设置为false，
      // 当然不设置false，它默认也是false，未选中的状态
      wx.setStorageSync("_collect",CollectState);
    }
  },
  handleClickShow(event){
    // 获取当前缓存中的所有状态
    let getSecCollect = wx.getStorageSync("_collect");
    // 获取当前页面的收藏按钮的状态  this.data.collectData就是当前的页面的id，在data中存储的
    let getSecCollectState = getSecCollect[this.data.collectData];
    // 然后当前收藏按钮的状态取反
    getSecCollectState = !getSecCollectState;
    // 把取反的值的状态 在赋给 当前按钮的状态
    getSecCollect[this.data.collectData] = getSecCollectState;
    wx.setStorageSync("_collect",getSecCollect)//在缓存中设置改变之后的状态
    this.setData({
      isShow:getSecCollectState//把更新过的收藏按钮的状态赋值给isShow
    })
  },
  back:function(event){
    wx.navigateTo({
      url:"../report/report"
    })
  },
})