// pages/research/research.js
const app=getApp()
Page({
  jumpA:function(event){
    app.globalData.sccoreA+=1
    wx.redirectTo({
      url:"../Q2/Q2"
    })
    console.log(app.globalData.sccoreA)
    console.log(app.globalData.sccoreB)
    console.log(app.globalData.sccoreC)
    console.log(app.globalData.sccoreD)
  },
  jumpB:function(event){
    app.globalData.sccoreA+=2
    wx.redirectTo({
      url:"../Q2/Q2"
    })
    console.log(app.globalData.sccoreA)
    console.log(app.globalData.sccoreB)
    console.log(app.globalData.sccoreC)
    console.log(app.globalData.sccoreD)
  },
  jumpC:function(event){
    app.globalData.sccoreA+=3
    wx.redirectTo({
      url:"../Q2/Q2"
    })
    console.log(app.globalData.sccoreA)
    console.log(app.globalData.sccoreB)
    console.log(app.globalData.sccoreC)
    console.log(app.globalData.sccoreD)
  },
  jumpD:function(event){
    app.globalData.sccoreA+=4
    wx.redirectTo({
      url:"../Q2/Q2"
    })
    console.log(app.globalData.sccoreA)
    console.log(app.globalData.sccoreB)
    console.log(app.globalData.sccoreC)
    console.log(app.globalData.sccoreD)
  }
})