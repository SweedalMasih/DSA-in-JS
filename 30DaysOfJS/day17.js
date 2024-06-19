var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  const expiryTime = currentTime + duration;

  const existing = this.cache.get(key);
  const isUnexpired = existing && existing.expiryTime > currentTime;

  this.cache.set(key, { value, expiryTime });

  return isUnexpired ? isUnexpired : false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now();
  const cached = this.cache.get(key);

  if (cached && cached.expiryTime > currentTime) {
    return cached.value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;

  for (const [key, { expiryTime }] of this.cache.entries()) {
    if (expiryTime > currentTime) {
      count++;
    }
  }

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
