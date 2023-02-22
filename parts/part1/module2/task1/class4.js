// const s = new Set()

// s.add(1)
// s.add(1)
// s.add(3).add(4)

// console.log(...s,s,s.size,s.has(5))

// s.clear()
// console.log(s)

// const arr = [1,2,1,33,4,5,5,6,1,2]

// const result = [...new Set(arr)]

// console.log(result)

const obj = {}
obj[true] = 'lijian'
obj[123]= 'lijian'
console.log(Object.keys(obj))

const m = new Map()
const tom = {name:'tom'}
 m.set(tom,90)

 console.log(m)

 console.log(m.get(tom))

 m.has()
 m.clear()