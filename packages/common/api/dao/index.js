import axios from '../axios.config';
import message from './message';
import licence from './licence';
/**
 * dao 规范
 * 1. 第一个参数永远是后端接口需要的参数，应为一个对象，允许为空
 * 2. 不对错误进行处理，默认均有成功的返回值，错误应在 axios.config 处理
 * 3. 只使用 resolve ，使用布尔值表示成功与否
 */

/**
 * 登录
 * @param {Object} params
 *  @param {String} params.account
 *  @param {String} params.password
 * @returns
 */
const login = (params) => {
  return new Promise((resolve) => {
    axios
      .get('/t-user', { params })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 获取自己的用户信息
 * @returns
 */
const getUserInfo = () => {
  return new Promise((resolve) => {
    axios
      .get('/t-user/my/')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 更新用户信息
 */
const putUserInfo = (params) => {
  params.creator && delete params.creator;
  return new Promise((resolve) => {
    axios
      .put('/t-user', params)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 查询自己权限下
 * 能管理的用户列表
 */
const getUserListWithRole = () => {
  return new Promise((resolve) => {
    axios
      .get('/management/user')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 获取自己的驾照列表
 */
const getDriverLicenseList = () => {
  return new Promise((resolve) => {
    axios
      .get('/t-user-licence')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 根据驾照ID
 * 返回该驾照的大流程
 * @param {Objet} params
 *  @param {Number} params.id
 */
const getProcessListById = (params) => {
  return new Promise((resolve) => {
    axios
      .get('/t-user-process', { params })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 根据大流程ID
 * 返回该大流程的小流程
 * @param {Objet} params
 *  @param {Number} params.id
 */
const getProcessDetailListById = (params) => {
  return new Promise((resolve) => {
    axios
      .get('/t-user-process-list', { params })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

export default {
  ...message,
  ...licence,
  login,
  getUserInfo,
  putUserInfo,
  getUserListWithRole,
  getDriverLicenseList,
  getProcessListById,
  getProcessDetailListById,
};
