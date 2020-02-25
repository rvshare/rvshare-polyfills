module.exports = function promisePrototypeFinally(promise, cb) {
  return promise.finally(cb);
};
