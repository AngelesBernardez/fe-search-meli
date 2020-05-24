/**
 * Utility to check if Object is empty
 * @param {Object} obj - The object to check.
 * @returns {Boolean}.- Empty or not.
 */
export const checkIfObjEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
