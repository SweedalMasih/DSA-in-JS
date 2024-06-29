var promiseAll = function (functions) {
  const myPromise = new Promise(function (resolve, reject) {
    let count = 0;
    let res = new Array(functions.length);

    for (let i = 0; i < functions.length; i++) {
      let fn = functions[i];
      fn()
        .then(function (val) {
          count += 1;
          res[i] = val;
          if (count === functions.length) resolve(res);
        })
        .catch(function (err) {
          reject(err);
        });
    }
  });

  return myPromise;
};
