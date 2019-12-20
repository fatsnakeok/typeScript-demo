// 联合类型（Union Types）表示取值可以为多种类型中的一种。

// 1.变量中
let myFavoriteNumber: string | number;  // 允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// myFavoriteNumber = true;

// 2.属性或是方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number) : string {
//    return something.length; // length 不是 string 和 number 的共有属性，所以会报错。
    return something.toString();
}


// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length); // 5    // 类型被推断为 string， 访问length  不会报错
myFavoriteNumber = 7;
console.log(myFavoriteNumber1.length); // 编译时报错    // 类型被推断为 number， 访问length  不会报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.

export {};
