const person = {
  name:'lijian',
  age:31
}

const personProxy = new Proxy(person,{
  // get(target,property){
  //   console.log(target,property);
  //   return 100
  // },
  set(target,property,value){
    console.log(target,property,value)
  },
  deleteProperty(target,property){
    
  }
})

console.log(personProxy.name)