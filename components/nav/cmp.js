// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      magazineTypeArr: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂'],
      magazineIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(e){
      let lastIndex = this.data.magazineIndex;
      let targetIndex = e.currentTarget.dataset.index;
      this.setData({
        magazineIndex:targetIndex,
      })
      if (lastIndex == targetIndex){
        return ;
      }
      this.triggerEvent('nav', {targetIndex})
    }
  }
})
