// 类型推论
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

// 1.定义时没有明确指定类型，但是赋值了，会根据值得类型进行变量的类型推断
let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 等价于
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.


// 2.定义时没有明确指定类型，但是赋值了，都会被推断成 any 类型而完全不被类型检查
let myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.


export {};
