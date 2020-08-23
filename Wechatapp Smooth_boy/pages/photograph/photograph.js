
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
 
 TakePhoto(event) {
  var picinf = wx.createCameraContext()
  picinf.takePhoto({
    quality: 'high',
  })
  console.log('fuckfuckfuck')
  //console.log(picinf.onCameraFrame)
  const listener = picinf.onCameraFrame((frame) => {
    console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
  })
  wx.redirectTo({
    url: "../assessment/assessment"
  })
 }
})
