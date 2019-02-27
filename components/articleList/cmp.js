// components/articleList/cmp.js
let indexAjax = require('../../models/index.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    articleList:{
      type:Array,
      value:[],
      observer(){

      }
    },
    more:{
      type:String,
      value:'',
      observer:'loadMore'
    },
    magazineId:{
      type:Number,
      value:0,
      observer(){
        this.setData({
          noMoreData: false,
          loading:false
        })
      }
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMoreData:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 触底加载
    loadMore(){
      this.setData({
        noMoreData: false
      })


      if(this.data.loading || this.data.noMoreData){
          return;
      }
      this.setData({
        loading:true
      })
      let magazineId = this.properties.magazineId;
      let start = this.properties.articleList.length;
      
      indexAjax.getIndexArticleList(magazineId, start).then(data => {
          //将新请求回来的数据与原来的合并 
        const combineList = this.properties.articleList.concat(data);
        if (combineList.length == this.properties.articleList.length){
          this.setData({
            noMoreData:true
          });
          return ;
        }
        // 将合并后的数组赋给articleList
        this.setData({
          articleList: combineList,
          loading:false
        });
      })

    }
  }
})
