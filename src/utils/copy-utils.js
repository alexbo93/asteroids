/**
 * Returns a deep copy of an specific object or array
 * @param {object} Object to clone
 */
export const deepCopy = (object) => JSON.parse(JSON.stringify(object));
