// 函数的类型

// 1.函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 1.1函数声明的类型定义约束，输入 + 输出
function sum1(x: number, y: number): number {
    return x + y;
}

// 1.2输入多余/少于参数，不被允许
// sum(1, 2, 3);


// 2.函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

// 2.1 函数表达式类型定义

// 类型推论，推断返回值类型
let mySum1 = function (x: number, y: number): number {
    return x + y;
};

// 2.2 手动明确指定返回值类型
let mySum12: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，（输入类型） => 输出类型

// 在 ES6 中，=> 叫做箭头函数

// 2.3用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 2.4可选参数
// 用 ? 表示可选的参数，必须放在最后
// 可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


// 2.5参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat1= buildName1('Tom', 'Cat');
let tom1 = buildName1('Tom');

// 2.6剩余参数
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

// 剩余参数是一个数组，用数组的类型来定义它
function push1(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a1 = [];
push(a1, 1, 2, 3);

// 2.7 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

function reverse1(x: number): number;
function reverse1(x: string): string;
function reverse1(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

export {}
