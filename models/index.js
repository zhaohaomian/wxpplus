let ajax = require('../utils/request.js');

let getRecommendInfo = function (magazineId=0){
  return ajax({ url:`/getRecommendInfo/${magazineId}`})
}

// 文章列表
let getIndexArticleList=function (magazineId=0, start=0){
  return ajax({ url:`/getIndexArticleList/${magazineId}/${start}`})
}
// 标签数据
let getMarkTypeList=function (magazineId=0){
  return ajax({ url:`/getMarkTypeList/${magazineId}`})
}

module.exports={
  getRecommendInfo,
  getIndexArticleList,
  getMarkTypeList
}