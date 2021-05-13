import dayjs from 'dayjs';

export default {
  /**
   * 删除对象构成的数组中指定属性值的元素
   * @param {Array} array
   * @param {Sting} attr
   * @param {*} value
   * @returns
   */
  deleteObjectItemByAttributes(array, attr, value) {
    let newArr = array.filter((item) => {
      return item[attr] != value;
    });
    return newArr;
  },
  /**
   * 格式化时间戳
   * @param {Number} timestamp 时间戳
   * @returns YYYY/MM/DD HH:mm:ss
   */
  formatDate(timestamp) {
    return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss');
  },
};
