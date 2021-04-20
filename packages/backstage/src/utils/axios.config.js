import axios from 'axios';
// import qs from 'qs';
import { Message, Loading } from 'element-ui';

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
});

let loadingInstance;
// 请求拦截器
Axios.interceptors.request.use(
  (config) => {
    loadingInstance = Loading.service({
      lock: true,
      text: '数据加载中，请稍后...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    // if (config.method === 'post' || config.method ==='put') {
    //   config.data = qs.stringify(config.data);
    // }
    config.headers.token = localStorage.getItem('token') || "";
    return config;
  },
  (err) => {
    loadingInstance.close();
    Message.error('请求错误');
    return Promise.reject(err);
  }
);
// 响应拦截器
Axios.interceptors.response.use(
  (res) => {
    loadingInstance.close();
    // 如果颁发 token 存入 localStorage
    if(res.headers?.token){
      localStorage.setItem('token', res.headers?.token)
    }
    if (res.data?.code === 0 && res.status === 200) {
      return res;
    } else {
      Message.error(res.data?.msg);
    }
  },
  (err) => {
    loadingInstance.close();
    Message.error('请求失败，请稍后再试');
    return Promise.reject(err);
  }
);

export default Axios;
