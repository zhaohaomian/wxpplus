// components/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },
  attach(){

    let articleDetail = this.properties.articleDetail;
    let likeList = wx.getStorageSync('likeList') || [];
    const artId = articleDetail.artId;
    likeList.forEach((item, index) => {
      if (item.artId == artId) {
          this.setData({
            likeStatus:true
          })
      }
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    onlike(e){
      let like = e.detail.like;
      
      let articleDetail = this.properties.articleDetail;
      let likeList = wx.getStorageSync('likeList') || [];

      if(like){

        likeList.unshift(articleDetail);
        wx.setStorageSync('likeList', likeList)
      }else{

        const artId = articleDetail.artId;
        likeList.forEach((item,index)=>{
          if(item.artId == artId){
            likeList.splice(index,1)
            wx.setStorageSync('likeList', likeList)
          }
        })

      }
    }
  }
})
