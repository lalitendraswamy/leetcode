/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let res = x;
    let l = functions.length - 1;
    for (let i in functions) {
      res = functions[l - i](res);
    }
    return res;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
