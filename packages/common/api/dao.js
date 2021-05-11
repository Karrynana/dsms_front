import axios from './axios.config';
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
 * 获取消息 收信人是自己
 * @returns
 */
const getMessage = () => {
  return new Promise((resolve) => {
    axios
      .get('/t-message')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 *
 * @param {*} param0
 * @returns
 */
const sendMessage = ({ receiver, msg }) => {
  return new Promise((resolve) => {
    axios
      .post('/t-message', { receiver, msg })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const readMessage = ({ id }) => {
  return new Promise((resolve) => {
    axios
      .put('/t-message', { id })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const cancelReadMessage = ({ id }) => {
  return new Promise((resolve) => {
    axios
      .put('/t-message', { id })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const readAllMessage = () => {
  return new Promise((resolve) => {
    axios
      .put('/t-message')
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};
const cancelReadAllMessage = () => {
  return new Promise((resolve) => {
    axios
      .put('/t-message')
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const deleteMessage = ({ id }) => {
  return new Promise((resolve) => {
    axios
      .delete('/t-message', {
        params: {
          id,
        },
      })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const getSendMessageList = () => {
  return new Promise((resolve) => {
    axios
      .get('/t-message/sender')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

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

export default {
  login,
  getUserInfo,
  getMessage,
  sendMessage,
  readMessage,
  cancelReadMessage,
  readAllMessage,
  cancelReadAllMessage,
  deleteMessage,
  getSendMessageList,
  getUserListWithRole
};
