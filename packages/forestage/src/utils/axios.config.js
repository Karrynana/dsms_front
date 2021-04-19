import axios from 'axios';
import qs from 'qs';

// 配置接口地址
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://192.168.199.138:8081/dsms/'; // 开发环境
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


// 请求拦截器
Axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
Axios.interceptors.response.use(
  (res) => {
    if (res.data?.code === 0 && res.status === 200) {
      return res;
    } 
    // else {
    // }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Axios;
