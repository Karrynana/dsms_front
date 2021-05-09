import axios from './axios.config';
/**
 * dao 规范
 * 1. 第一个参数永远是后端接口需要的参数，应为一个对象，允许为空
 * 2. 不对错误进行处理，默认均有成功的返回值，错误应在 axios.config 处理
 */

/**
 * 登录
 * @param {Object} params
 *  @param {String} params.account
 *  @param {String} params.password
 * @returns
 */
const login = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/t-user', { params })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  login,
};
