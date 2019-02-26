// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLinkTo(){
      wx.navigateTo({
        url: `/pages/type/type?tagId=${this.properties.tagId}`,
      })
    }
  }
})
