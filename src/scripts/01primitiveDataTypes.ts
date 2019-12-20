// 布尔类型
let isDone: boolean = false;

// boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
// let createdByNewBoolean: boolean = new Boolean(1);
let createByNewBoolean: Boolean = new Boolean(1);


// 数值类型 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法, 会被编译成十进制
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法, 会被编译成十进制
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串 string

let myName: String = 'Tom';
let myAge: number = 25;

// 模板字符串
// 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


// 空值

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

// Null和Undefined
let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，
// 1.undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

let num: number = undefined;

let u1: undefined;
let number: number = u;

// 2.void 类型的变量不能赋值给 number 类型的变量：
let u2: void;
// Type 'void' is not assignable to type 'number'.
// let num2: number = u2;


