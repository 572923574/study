function memoize(fn){
  let cache = {

  }
  
  return function(){
    let keys = JSON.stringify(arguments)
    cache[keys] = cache[keys] || fn.apply(fn,arguments)
    return cache[keys]
  }
}

