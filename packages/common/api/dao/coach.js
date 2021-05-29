import axios from '../axios.config';

const getCoachList = () => {
  return new Promise((resolve) => {
    axios
      .get('/t-coach')
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 给教练评价
 */
const createCoachAppraise = (params) => {
  return new Promise((resolve) => {
    axios
      .post('/t-coach-appraise', { ...params })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

/**
 * 获取教练评价
 */
const getCoachAppraiseById = (params) => {
  return new Promise((resolve) => {
    axios
      .get('/t-coach-appraise/coach', { params })
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

export default {
  getCoachList,
  createCoachAppraise,
  getCoachAppraiseById,
};
