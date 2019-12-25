// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// <类型>值  或者 值 as 类型

// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。

// function getLength1(something: string | number): number {
//     return something.length;
// }

// 不确定类型的时候就访问其中一个类型的属性或方法
// function getLength2(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }

// 类型断言的用法如上，在需要断言的变量前加上 <Type> 即可
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {
//     return <boolean>something;
// }

// index.ts(2,10): error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
//   Type 'number' is not comparable to type 'boolean'.
