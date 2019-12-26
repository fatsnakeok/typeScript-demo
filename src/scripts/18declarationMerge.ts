// 声明的合并
// 如果定义了两个相同名字的函数、接口、类，那么他们会合并成一个类型

// 错误信息列表： https://www.tslang.cn/docs/handbook/error.html


// “声明合并”是指  编译器   将针对同一个名字的两个独立声明合并为单一声明。
// 合并后的声明同时拥有原先两个声明的特性。 任何数量的声明都可被合并；不局限于两个声明。

// 1函数的合并
function reverse(x: number): number;
function reverse(x: string): number;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口的合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

interface Alarm {
    price: number;
    weight: number;
}

// 合并的属性的类型必须是唯一的：
interface Alarm1 {
    price: number;
}
interface Alarm1 {
    price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number;
}

interface Alarm1 {
    price: number;
}
// interface Alarm1 {
//     price: string;  // 类型不一致，会报错
//     weight: number;
// }

// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'.

// 接口方法的合并
interface Alarm2 {
    price: number;
    alert(s: string): string;
}
interface Alarm2 {
    weight: number;
    alert(s: string, n: number): string;
}


// 等价于
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
export {}
