import axios from 'axios';
import qs from 'qs';

// 配置接口地址
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://192.168.123.96:8081/dsms/'; // 开发环境
} else if (process.env.type === 'test') {
  // baseURL = '';// 测试环境
} else {
  // baseURL = '';// 生产环境
}

const Axios = axios.create({
  baseURL: baseURL, // 后台服务地址
  timeout: 20000, // 请求超时时间20s
  responseType: 'json',
  withCredentials: true, // 是否携带cookie
});


// 请求拦截器,发送获取到的token
Axios.interceptors.request.use(
  (config) => {
    // 将获取到的存贮在localStorage的token赋值于请求字段token里，可能为空字符串
    config.headers.token = localStorage.getItem('token') || '';
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器,获取token并存储
Axios.interceptors.response.use(
  (res) => {
    // console.log(res);
    // 如果response发来token字段，则本地存储
    if (res.headers?.token) {
      localStorage.setItem('token', res.headers?.token);
    }
    if (res.data?.code === 0 && res.status === 200) {
      return res;
    }
    else {
      return res;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Axios;
