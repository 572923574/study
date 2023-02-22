const obj = {
  foo:'123',
  bar:'345'
}

const proxy = new Proxy(obj,{
  get(target,property){
    console.log('watch logic~')
    return Reflect.get(target,property)
  }
})

console.log(proxy.foo)

const obje = {
  name:'lijian',
  age:18
}

console.log(Reflect.has(obje,'name'))
console.log(Reflect.deleteProperty(obje,'age'))