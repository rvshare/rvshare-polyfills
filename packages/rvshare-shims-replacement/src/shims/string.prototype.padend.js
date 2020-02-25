module.exports = function stringPrototypePadEnd(x, length, padStr) {
  return String(x).padEnd(length, padStr);
};
