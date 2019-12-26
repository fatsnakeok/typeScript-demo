// 泛型（Generics）是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 一、泛型约束变量（参数）
// 1.基本使用  一个类型参数
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

// 可以指定它具体的类型为 string
createArray<string>(3, 'x'); // ['x', 'x', 'x']

// 可以不手动指定，而让类型推论自动推算出来：
createArray(3, 'x'); // ['x', 'x', 'x']

// 2.多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 3.泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

// 对泛型添加约束
// 以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束
interface Lengthwise {
    length: number;
}

// 使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 泛型接口
// 可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 使用接口定义函数形态
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 二、泛型接口
interface CreateArrayFunc {
    // <T>传入参数                  返回类型
    <T>(length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc;
createArray1 = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// 泛型放入接口名
interface CreateArrayFunc1<T> {
    (length: number, value: T): Array<T>;
}

// 使用泛型接口的时候，需要定义泛型的类型  此处<any>或者<string>
let createArray2: CreateArrayFunc1<any>;
// let createArray2: CreateArrayFunc1<string>;
createArray2 = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}


// 三、泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};


createArray2(3, 'x'); // ['x', 'x', 'x']


// 泛型参数的默认类型
// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArray123<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
export {}
