/**
 * Object.assign() - Polyfill
 *
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

'use strict';

function assign(target) {
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
            for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
    }
    return output;
};

module.exports = function() {
    return assign;
}
