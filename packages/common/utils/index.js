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
};
