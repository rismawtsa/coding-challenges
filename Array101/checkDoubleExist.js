/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExistV1 = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (obj[num] !== undefined) return true;

    obj[num / 2] = num;
    obj[2 * num] = num;
  }

  return false;
};

// using set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExistV2 = function (arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (set.has(num)) return true;

    set.add(num / 2);
    set.add(num * 2);
  }

  return false;
};

// save the value of array to map then check if the key is equal to
// the element 2 * arr[i] so far or arr[i] / 2 was seen if arr[i] % 2 == 0
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExistV3 = function (arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) return true;

    set.add(num);
  }

  return false;
};

module.exports = {
  checkIfExistV1,
  checkIfExistV2,
  checkIfExistV3,
};
console.log(checkIfExistV3([7, 1, 14, 11])); // true
console.log(checkIfExistV3([10, 2, 5, 3])); // true
console.log(checkIfExistV3([0, 0])); // true
console.log(checkIfExistV3([-10, 12, -20, -8, 15])); // true
console.log(checkIfExistV3([2, 3, 5])); // true
