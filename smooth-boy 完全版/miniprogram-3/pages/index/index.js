//index.js
//获取应用实例
Page({
  date:{
    username:'',
    password:'',
  },
  inputUsername(e){
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e){
    this.setData({
      password: e.detail.value,
    })
  },
  register(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  register2(){
    wx.navigateTo({
      url: '../photograph/photograph',
    })
  },

  data: {
    username: '',
    password: '',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },


  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
  login() {
    const {
      username,
      password,
    } = this.data;
    AV.User.logIn(username, password).then(function (loginedUser) {
      wx.redirectTo({
        url: 'pages/photograph/photograph'
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      })
      // 登录成功，跳转到message页面
    }, function (error) {
      alert(JSON.stringify(error));
    });
  },
})

