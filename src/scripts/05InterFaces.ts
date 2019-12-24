// 接口
// 用于对类的一部分行为进行抽象，也可以对"对象的形状"进行描述


interface Person {
    name: String;
    age: number;
}

// 1.接口的实现
let tom: Person = {
    name: 'Tom',
    age: 25
};

// 1.1定义的变量比接口少了一些变量是不允许的
// let jay: Person = {
//     name: 'jay'
// };


// 1.2多一些属性也是不允许的
// let hey: Person = {
//     name: 'hey',
//     age: 25,
//     gender: 'male'
// };


// 2.可选属性
interface Person2 {
    name: string;
    age?: number;
}

// 可选属性的含义是该属性可以不存在。
let jim: Person2 = {
    name: 'jim'
};

let jim2: Person2 = {
    name: 'Tom',
    age: 25,
    // gender: 'male'  不允许添加未定义的属性
};

interface Person3 {
    name: string;
    age?: number;
[propName: string]: any;
}

// let lucy: Person3 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };


// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.

// 只读属性 readonly
//

interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom123: Person4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// 只能在创建时被赋值，其他时候只能被获取
// tom123.id = 9527;

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 创建对象时必须给readOnly属性进行赋值
// let tom1234: Person4 = {
//     name: 'Tom',
//     gender: 'male'
// };
//
// tom.id = 89757;

export {}
