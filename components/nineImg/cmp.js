// components/nineImg/cmp.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImg(e){
      wx.previewImage({
        urls:this.data.imgArr,
  current:e.target.dataset.current
      })
    }

  }
})
