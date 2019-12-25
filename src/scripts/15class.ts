// ES6中类的用法
// 1属性和方法
// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数
class Animal11 {
    name: string;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal11('Jack');
console.log(a.sayHi()); // My name is Jack
