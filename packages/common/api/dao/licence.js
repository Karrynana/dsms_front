import axios from '../axios.config';

/**
 * 查询用户的驾照列表
 */
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
 * 查询用户激活的驾照
 */
const getUserActiveLicenceById = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/t-user-licence/active')
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

/**
 * 查询下一个状态的名字
 */
const queryNextProcessInfo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/t-user-process-list/next/info')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 学生自行流转状态
 */
const nextProcessWithStudent = (params) => {
  const { flag } = params;
  return new Promise((resolve, reject) => {
    axios
      .post('/t-user-process-list?flag=' + flag)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 教师流转学生状态
 */
const nextProcessWithTeacher = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .post('/t-user-process-list/teacher', { ...params })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
};

/**
 * 教师查询某学生的全部流水
 */
const getProcessListByUidUlidWithTeacher = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/t-user-process-list/teacher/stu', { params })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        reject(false);
      });
  });
};

export default {
  getUserLicenceListById,
  getUserActiveLicenceById,
  creatNewLicence,
  addTime,
  queryNextProcessInfo,
  nextProcessWithStudent,
  nextProcessWithTeacher,
  getProcessListByUidUlidWithTeacher,
};
