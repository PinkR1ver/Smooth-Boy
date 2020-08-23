// pages/photograph/photograph.js
const app=getApp()
var validinf = new Array()
var listener;
Page({
   /*
   TakePhoto(event){
     const picinf = wx.createCameraContext()
     picinf.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res.tempImagePath)
      }
    })
  }
    */
  /*
   TakePhoto(event){
      wx.redirectTo({
        url: "../personal/personal",
      })
    }
  */
 
//  TakePhoto(event) {
//   console.log(event)
//   var picinf = wx.createCameraContext()
//   picinf.takePhoto({
//     quality: 'high',
//   })
//   //console.log(picinf.onCameraFrame)
//   var frame = picinf.onCameraFrame()
//   console.log(frame.data, frame.width, frame.height)
//   // wx.redirectTo({
//   //   url: "../assessment/assessment"
//   // })
//  },
MAX(a,b,c){
  if(a>b && a>c) return a
  else if(b>a && b>c) return b
  else return c
},

MIN(a,b,c){
  if(a<b && a<c) return a
  else if(b<a && b<c) return b
  else return c
},

ABS(a){
  if(a>0) return a
  else return -a
},

TakePhoto(){
  // console.log("too")
  // listener.stop()
  // var j=0
  // const picinf = Array.prototype.slice.call(new Uint8Array(this.data.picinf))
  // console.log("shit")
  // console.log(picinf.length)
  // for(var i=0;i<picinf.length;i=i+4){
  //   console.log("fuck")
  //   if(picinf[i]>95 && picinf[i+1]>40 && picinf[i+2]>20 && this.MAX(picinf[i],picinf[i+1],picinf[i+2])-this.MIN(picinf[i],picinf[i+1],picinf[i+2])>15 && this.ABS(picinf[i]-picinf[i+1])>15 && picinf[i]>picinf[i+1] && picinf[i]>picinf[i+2]){
  //     for(var q=0;q<2;q++) validinf[j+q]=picinf[i+q]
  //     j=j+4
  //     //console.log('sucess')
  //   }
  // }
  // console.log('1')
  // console.log(picinf)
  app.globalData.sccore = 70+20*Math.random()
  var sccore = app.globalData.sccore 
  console.log(sccore)
  wx.navigateTo({
    url: "../Q1/Q1"
  })
  //console.log("pull")
},

 onLoad(){
  //  var that = this
  //  wx.chooseImage({
  //   success (res) {
  //     wx.getImageInfo({
  //       src: res.tempFilePaths[0],
  //       success (res) {
  //         console.log(res.width)
  //         console.log(res.height)
  //         console.log(res.type)
  //       }
  //     })
  //   }
  // })
},
onReady() {
  const context = wx.createCameraContext(this)
  var count=0;
  listener = context.onCameraFrame((frame) => {
    count++
    if(count===30){
      this.data.picinf=frame.data
      console.log("success")
      count=0
    }
    //console.log(frame.data)
  })
  listener.start()
},

data: {
  picinf:[],
},
//   TakePhoto:function(event){
//   wx.redirectTo({
//     url:"../Q1/Q1"
//   })
// },
})