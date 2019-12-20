// 接口
// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

// 1.定义接口
// 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
interface Person {
    name: string;
    age: number;
}

// 2.变量实现接口
let tom: Person = {
    name: 'Tom',
    age: 25
};

// 2.1.变量不能比接口少属性
// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
// let lucy: Person = {
//     name: 'Lucy'
// }

// 2.2.多属性也不行
let jim: Person = {
    name: 'Jim',
    age: 26,
    // gender: 'male' //  may only specify known properties, and 'gender' does not exist in type 'Person'
}

// ******** 赋值的时候，变量的形状必须和接口的形状保持一致。

// 3.1.可选属性：可选属性的含义是该属性可以不存在。
interface Person1 {
    name: string;
    age?: number;  // 可选属性，实例化变量可以不含有此属性
}

let tom1: Person1 = {
    name: 'Tom2'
};

// 3.2 不允许添加未定义的属性

let tom2: Person1 = {
    name: 'Tom',
    age: 25,
    // gender: 'male'    不允许添加未定义的属性
};


export {};
