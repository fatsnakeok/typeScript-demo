"use strict";
// 接口
// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
Object.defineProperty(exports, "__esModule", { value: true });
// 2.变量实现接口
var tom = {
    name: 'Tom',
    age: 25
};
// 2.1.变量不能比接口少属性
// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
// let lucy: Person = {
//     name: 'Lucy'
// }
// 2.2.多属性也不行
var jim = {
    name: 'Jim',
    age: 26,
};
var tom1 = {
    name: 'Tom2'
};
// 3.2 不允许添加未定义的属性
var tom2 = {
    name: 'Tom',
    age: 25,
};
//# sourceMappingURL=Interfaces.js.map