module.exports = function stringPrototypePadStart(x, length, padStr) {
  return String(x).padStart(length, padStr);
};
