import axios from 'axios'


axios.defaults.timeout = 10000;


axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${sessionStorage.getItem('token')}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    if (error.response) {
      //switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。

        // case 401:
        //   router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   });
        //   break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面

        // case 403:
        //   Toast({
        //     message: '登录过期，请重新登录',
        //     duration: 1000,
        //     forbidClick: true
        //   });
        //   // 清除token
        //   localStorage.removeItem('token');
        //   store.commit('loginSuccess', null);
        //   // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        //   setTimeout(() => {
        //     router.replace({
        //       path: '/login',
        //       query: {
        //         redirect: router.currentRoute.fullPath
        //       }
        //     });
        //   }, 1000);
        //   break;

        // 404请求不存在

        // case 404:
        //   Toast({
        //     message: '网络请求不存在',
        //     duration: 1500,
        //     forbidClick: true
        //   });
        //   break;

        // 其他错误，直接抛出错误提示

        // default:
        //   Toast({
        //     message: error.response.data.message,
        //     duration: 1500,
        //     forbidClick: true
        //   });
      //}
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
);


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(api, params){
  return new Promise((resolve, reject) =>{
    axios.get(process.env.API_HOST + api, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  });
}



/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(api, params) {
  return new Promise((resolve, reject) => {
    axios.post(process.env.API_HOST + api, JSON.stringify(params))
      .then(res => {
        console.log('post请求返回数据：', res);
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}

