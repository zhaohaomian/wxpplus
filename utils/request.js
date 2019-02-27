

function request({ url, methods = "get", data = {} }) {
    return new Promise((resolve,reject)=>{
        wx.request({
          url:`https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine${url}`,
          data,
          methods,
          success(res) {
              resolve(res.data.data);
          }
        })

    })
}

module.exports = request;