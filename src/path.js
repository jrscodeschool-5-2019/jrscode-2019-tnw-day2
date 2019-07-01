/**
 * path function
 *
 * takes an array and an object and returns associated values if present
 *
 * @param {Array} arr
 * @param {Object} obj
 *
 * @returns {Array}
 */

function path(arr, obj) {
  arr.map(item => {
    return obj[item]
    // if (obj[item]) {
    //   return obj[item];
    // } else {
    //   return null;
    // }
  })
}

export default path
