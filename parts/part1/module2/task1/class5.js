const cache = {}

cache['foo'] = Math.random()


const s = Symbol()

console.log(s,typeof s)
const arr = [100,200,300,400]

for(const item of arr){
  console.log(item)
}


const ss = new Set(['foo','bar']);
for(let item of ss){

}

const map = new Map()
map.set('bar','123')
map.set('foo',345)

for(let [key,value] of map){
  console.log(key,value)
}