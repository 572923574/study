// const arr =['foo','bar','baz']

// const iterator = new Set(arr)[Symbol.iterator]()

// console.log(iterator,'88',iterator.next())


function * foo(){
  console.log('lijian')
  return 100
}

const result = foo()
console.log(result.next(),result.next())