
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
 onLoad(){
   var that = this
   wx.chooseImage({
    success (res) {
      wx.getImageInfo({
        src: res.tempFilePaths[0],
        success (res) {
          console.log(res.width)
          console.log(res.height)
          console.log(res.type)
        }
      })
    }
  })
},
data: {
  
},

})
