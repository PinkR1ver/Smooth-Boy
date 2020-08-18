
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
 onLoad  (){
   var that = this
  // wx.chooseImage({
  //   count: 1,
  //   sizeType: ['original', 'compressed'],
  //   sourceType: ['album', 'camera'],
  //   success (res) {
  //     // tempFilePath可以作为img标签的src属性显示图片
  //     that.setData({
  //        tempFilePaths:res.tempFilePaths
  //     })

  //   }
  // })
},
data: {
  tempFilePaths:''
},

})
