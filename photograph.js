// pages/photograph/photograph.js
const app=getApp()
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

arrayBufferToString(arr){
  if(typeof arr === 'string') {  
      return arr ;
  }  
  var dataview=new DataView(arr.data);
  var ints=new Uint8Array(arr.data.byteLength);
  for(var i=0;i<ints.length;i++){
    ints[i]=dataview.getUint8(i);
  }
  arr=ints;
  var str = '',  
      _arr = arr;  
  for(var i = 0; i < _arr.length; i++) {  
      var one = _arr[i].toString(2),  
          v = one.match(/^1+?(?=0)/);  
      if(v && one.length == 8) {  
          var bytesLength = v[0].length;  
          var store = _arr[i].toString(2).slice(7 - bytesLength);  
          for(var st = 1; st < bytesLength; st++) {  
              store += _arr[st + i].toString(2).slice(2);  
          }  
          str += String.fromCharCode(parseInt(store, 2));  
          i += bytesLength - 1;  
      } else {  
          str += String.fromCharCode(_arr[i]);  
      }  
  }  
  return str; 
},

TakePhoto(){
  console.log("too")
  listener.stop()
  var j=0
  for(var i=0;i<this.data.picinf.length;i=i+400){
    console.log("fuck")
    if(this.data.picinf[i]>95 && this.data.picinf[i+1]>40 && this.data.picinf[i+2]>20 && this.MAX(this.data.picinf[i],this.data.picinf[i+1],this.data.picinf[i+2])-this.MIN(this.data.picinf[i],this.data.picinf[i+1],this.data.picinf[i+2])>15 && this.ABS(this.data.picinf[i]-this.data.picinf[i+1])>15 && this.data.picinf[i]>this.data.picinf[i+1] && this.data.picinf[i]>this.data.picinf[i+2]){
      for(var q=0;q<3;q++) this.data.validinf[j+q]=this.data.picinf[i+q]
      j=j+3
      console.log('sucess')
    }
  }
  console.log(this.data.validinf.length)
  for(var i=0;i<10;i++){
    console.log(this.data.validinf[i])
  }
  //this.data.picinf=this.arrayBufferToString(frame.data)
  //this.data.picinf = Array.prototype.slice.call(new Uint8Array(frame.data))
  // console.log('1')
  // console.log(picinf)
  // app.globalData.sccore = 70+20*Math.random()
  // var sccore = app.globalData.sccore 
  // console.log(sccore)
  var R = new Array()
  var G = new Array()
  var B = new Array()
  var Var_R,Var_G,Var_B
  var Average_R,Average_G,Average_B
  var sum=0
  for(var i=0,j=0;i<this.data.validinf.length;i+=3,j++){
    console.log("so")
    R[j] = this.data.validinf[i]
    G[j] = this.data.validinf[i+1]
    B[j] = this.data.validinf[i+2]
  }
  for(var i=0;i<R.length;i++){
    sum+=R[i]
  }
  Average_R = sum / R.length
  sum = 0
  for(var i=0;i<G.length;i++){
    sum+=G[i]
  }
  Average_G = sum / G.length
  sum = 0
  for(var i=0;i<B.length;i++){
    sum+=B[i]
  }
  Average_B = sum / B.length
  sum = 0
  for(var i=0;i<R.length;i++){
    sum+=this.ABS(Average_R*Average_R-R[i]*R[i])
  }
  Var_R = sum / R.length
  sum = 0
  for(var i=0;i<G.length;i++){
    sum+=this.ABS(Average_G*Average_G-G[i]*G[i])
  }
  Var_G = sum / G.length
  sum = 0
  for(var i=0;i<B.length;i++){
    sum+=this.ABS(Average_B*Average_B-B[i]*B[i])
  }
  Var_B = sum / B.length
  sum = 0
  console.log(Var_R,Var_G,Var_B)
  app.globalData.sccore = 100 - Var_R/1000 - (Var_G+Var_B)/3000
  console.log(app.globalData.sccore) 
  wx.navigateTo({
    url: "../Q1/Q1"
  })
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
// onReady() {
//   const context = wx.createCameraContext(this)
//   var count=0;
//   var j=0
//   listener = context.onCameraFrame((frame) => {
//     count++
//     if(count===50){
//       //this.data.picinf=this.arrayBufferToString(frame.data)
//       this.data.picinf = Array.prototype.slice.call(new Uint8Array(frame.data))
//       // for(var i=0;i<this.data.picinf.length;i=i+400){
//       //   console.log("fuck")
//       //   if(this.data.picinf[i]>95 && this.data.picinf[i+1]>40 && this.data.picinf[i+2]>20 && this.MAX(this.data.picinf[i],this.data.picinf[i+1],this.data.picinf[i+2])-this.MIN(this.data.picinf[i],this.data.picinf[i+1],this.data.picinf[i+2])>15 && this.ABS(this.data.picinf[i]-this.data.picinf[i+1])>15 && this.data.picinf[i]>this.data.picinf[i+1] && this.data.picinf[i]>this.data.picinf[i+2]){
//       //     for(var q=0;q<2;q++) this.data.validinf[j+q]=this.data.picinf[i+q]
//       //     j=j+4
//       //     //console.log('sucess')
//       //   }
//       //console.log(this.data.picinf.length)
//       //console.log("success")
//         count=0
//     }
//     listener.start()
//   }
    //console.log(frame.data)
    onReady() {
      const context = wx.createCameraContext(this)
      var count=0;
      listener = context.onCameraFrame((frame) => {
        count++
        if(count===30){
          this.data.picinf = Array.prototype.slice.call(new Uint8Array(frame.data))
          console.log("success")
          count=0
        }
        //console.log(frame.data)
      })
      listener.start()
    },

data: {
  picinf:[],
  validinf:[],
},
//   TakePhoto:function(event){
//   wx.redirectTo({
//     url:"../Q1/Q1"
//   })
// },
})