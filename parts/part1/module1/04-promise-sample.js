const promise = new Promise(function(resolve,reject){

  resolve(100)//承诺达成 

  reject(new ErrorEvent('promise rejected'))
})

promise.then(function(value){
  console.log('resolved',value)
},function(error){
  console.log('rejected',error)
})