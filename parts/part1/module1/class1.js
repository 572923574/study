//高阶函数
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

//测试
let arr = [1, 4, 5, 7,8,6];

// forEach(arr,function(item){
//   console.log(item,'item=>>')
// })

function filter(array, fn) {
  let list = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      list.push(array[i]);
    }
  }
  return list;
}

let result = filter(arr, (item) => {
  return !(item % 2);
});

console.log(result)