module.exports = window.requestAnimationFrame.bind(window);
module.exports.cancel = window.cancelAnimationFrame.bind(window);
module.exports.polyfill = function polyfill() {};
