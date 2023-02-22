const map = (array, fn) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = fn(array[i]);
    result.push(item);
  }
  return result;
};

let arr = [1, 2, 3, 4];
let list = map(arr, (v) => {
  return v * v;
});
console.log(list);


const every = (array,fn)=>{
  let result = true;
  for(let value of array){
    result = fn(value)
    if(!result){
      break;
    }
  }
  
  return result
}

let result = every(arr,v=>v>3)
console.log(result)

const some =(array,fn)=>{
  let result = false;
  for(let value of array){
    result = fn(value)
    if(result) break;

  }
  return result
}

let someResult = some(arr,v=>v>3)
console.log(someResult)