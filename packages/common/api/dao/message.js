import axios from '../axios.config';

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

export default {
  getMessage,
  sendMessage,
  readMessage,
  cancelReadMessage,
  readAllMessage,
  cancelReadAllMessage,
  deleteMessage,
  getSendMessageList,
};
