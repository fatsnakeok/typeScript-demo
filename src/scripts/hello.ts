// TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。
function sayHello(person: string) {
    return 'Hello' + person;
}

let user = 'Tom';
console.log(sayHello(user));

// TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。

// let userArr = [1,2,3];
// console.log(sayHello(userArr));




export {};
