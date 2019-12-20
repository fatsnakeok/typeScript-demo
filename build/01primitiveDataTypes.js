// 布尔类型
var isDone = false;
// boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
// let createdByNewBoolean: boolean = new Boolean(1);
var createByNewBoolean = new Boolean(1);
// 数值类型 number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法, 会被编译成十进制
var binaryLiteral = 10;
// ES6 中的八进制表示法, 会被编译成十进制
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串 string
var myName = 'Tom';
var myAge = 25;
// 模板字符串
// 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName() {
    alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
var unusable = undefined;
// Null和Undefined
var u = undefined;
var n = null;
// 与 void 的区别是，
// 1.undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = undefined;
var u1;
var number = u;
// 2.void 类型的变量不能赋值给 number 类型的变量：
var u2;
// Type 'void' is not assignable to type 'number'.
// let num2: number = u2;
//# sourceMappingURL=01primitiveDataTypes.js.map