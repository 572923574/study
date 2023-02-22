/**
 * 1.Promise 是一个类,在执行这个类时会传递一个执行器进去，会立即执行
 * 2.Promise三种状态 pending 等待 fulfilled 成功，rejected 失败
 * 一旦状态确定，不可更改
 * 3.resolve 和reject 函数是用来更改状态的
 * 4.then 内部判断，如果成功状态 执行成功回调
 * 5.then成功回调参数 ，失败回调参数
 */

const MyPromise = require("./myPromise");
const myPromise = require("./myPromise");
let promise = new myPromise((resolve, reject) => {
  // reject('失败')
  // setTimeout(() => {
  // reject("失败");
  // throw new Error('44b')
  resolve("成功");
  // }, 2000);
});
function other() {
  return new MyPromise((resolve, reject) => {
    resolve("other");
  });
}
function p2() {
  return new MyPromise(function (resolve, reject) {
    resolve("p2 resolve");
  });
}
function p1(){
  return new MyPromise(function(resolve,reject){
    setTimeout(() => {
      resolve('p1')
    }, 2000);
  })
}
p2()
  .finally(() => {
    console.log("finally");
    return p1();
  })
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  );

// promise
//   .then(
//     (value) => {
//       console.log(value);
//       console.log(1);
//       // throw new Error('sb')
//       return other();
//     },
//     (reason) => {
//       console.log(reason);
//     }
//   )
//   .then(
//     (value) => {
//       console.log(value);
//       console.log(2);
//     },
//     (reason) => {
//       console.log(reason);
//     }
//   );
// promise.then((value)=>{console.log(value);console.log(2)},(reason)=>{console.log(reason)})
