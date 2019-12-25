// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

// 1.enum定义
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// 2.枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 3.手动赋值


// 3.1未手动赋值的枚举项会接着上一个枚举项递增

enum Days1 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days1["Sun"] === 7); // true
console.log(Days1["Mon"] === 1); // true
console.log(Days1["Tue"] === 2); // true
console.log(Days1["Sat"] === 6); // true

// 3.2 未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会
enum Days2 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true


// 3.3手动赋值的枚举项可以不是数字
enum Days3 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// 3.4手动枚举值可以是小数或是负数，后续元素递增1
enum Days4 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days4["Sun"] === 7); // true
console.log(Days4["Mon"] === 1.5); // true
console.log(Days4["Tue"] === 2.5); // true
console.log(Days4["Sat"] === 6.5); // true

// 4常数枚举
// 常数枚举是使用 const enum 定义的枚举类型
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 5外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型
// 外部枚举与常数枚举编译后的结果不一样
declare enum Directions1 {
    Up,
    Down,
    Left,
    Right
}

let directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right];
