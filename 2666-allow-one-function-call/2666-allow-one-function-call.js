/**
 * @param {Function} fn
 * @return {Function}
 */
let once = (fn) => {
  let count = null;
  return (...args) => {
    count++;
    return count > 1 ? undefined : fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
