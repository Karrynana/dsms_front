import axios from '../axios.config';

const getUserLicenceListById = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/t-user-licence/id', {
        params,
      })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 教师为学员创建新的驾照学习流程
 */
const creatNewLicence = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .post('/t-user-licence', { ...params })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 增加学时
 */
const addTime = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .put('/t-user-process/time', { ...params })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
};

export default {
  getUserLicenceListById,
  creatNewLicence,
  addTime,
};