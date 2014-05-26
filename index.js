/**
 * Whitelist object properties.
 *
 * @param {Object} obj - Source object.
 * @param {Array} list - Array of allowed properties.
 * @returns {Object} - Object only containing allowed properties.
 */
module.exports = function whitelist(obj, list) {
    var result = {};
    obj = obj || {};

    for (var i = 0, length = list.length; i < length; i++) {
        var key = list[i];
        if (key in obj) {
            result[key] = obj[key];
        }
    }

    return result;
};