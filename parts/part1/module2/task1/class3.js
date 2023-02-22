// function Person(name) {
//   this.name = name;
// }

// Person.prototype.say = function () {
//   console.log(`hi , my name is ${this.name}`);
// };

class Person {
  constructor(name) {
    // 构造函数
    this.name = name;
  }
  say() {
    console.log(`hi , my name is ${this.name}`);
  }

  static create(name){
    return new Person(name)
  }
}


// const p = new Person('lijian')
// console.log(p.say())

// const lagou = Person.create('lagou')
// lagou.say()

class Student extends Person{
  constructor(name,number){
    super(name)
    this.number= number
  }
  hello(){
    super.say()
    console.log(`my school number is ${this.number}`)
  }
}

const s = new Student('lijian',100)
s.hello()