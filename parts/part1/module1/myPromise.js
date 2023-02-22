const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  //promise 状态
  status = PENDING;
  //成功之后的值
  value = undefined;
  //失败后的原因
  reason = undefined;
  successList = [];
  failList = [];
  resolve = (value) => {
    //将状态更改为成功
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    //判断成功回调是否存在
    if (this.successList.length) {
      while (this.successList.length) {
        this.successList.shift()(this.value);
      }
    }
  };
  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    //判断失败函数是否存在
    if (this.failList.length) {
      while (this.failList.length) this.failList.shift()(this.reason);
    }
  };
  then = (successCallback, failCallback) => {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            resolvePromise(x, resolve, reject, promise2);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        failCallback(this.reason);
      } else {
        //等待
        this.successList.push(successCallback);
        this.failList.push(failCallback);
      }
    });
    return promise2;
  };
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }
  catch(failCallback) {
    return this.then(undefined, failCallback);
  }
  static all(array) {
    let result = [];
    let index = 0;

    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          //promise对象
          current.then(
            (value) => addData(i, value),
            (reason) => reject(reason)
          );
        } else {
          // 普通值
          addData(i, array[i]);
        }
      }
    });
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }
}

function resolvePromise(x, resolve, reject, promise2) {
  if (x === promise2) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (x instanceof MyPromise) {
    x.then(
      (valeu) => {
        resolve(valeu);
      },
      (reason) => {
        reject(reason);
      }
    );
  } else {
    resolve(x);
  }
}

module.exports = MyPromise;
