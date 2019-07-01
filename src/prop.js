/**
 * prop function
 *
 * takes a key and an object and returns associated value if present
 *
 * @param {String} string
 * @param {Object} object
 *
 * @returns {any}
 */

function prop(string, object) {
  if (object.string) {
    return object[string];
  } else {
    return null;
  }
}

export default prop;
