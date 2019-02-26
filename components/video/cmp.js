// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    duration:String,
    poster:String,
    mainTitle:String,
    videoId:String
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changePosterAndPlayVideo(e){  
      let video = this.toggleShowPoster();
       video.play();
       video.seek(0);
      },

    changePosterAndStopVideo(e) {
      let video = this.toggleShowPoster();
      video.stop();
    },
    toggleShowPoster(){
      this.setData({
        showPoster: !this.data.showPoster
      })
      return  wx.createVideoContext(this.properties.videoId, this);
    }



   }

})
