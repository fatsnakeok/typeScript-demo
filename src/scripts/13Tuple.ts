// 元祖

// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。


let tom: [string, number] = ['Tom', 25];

// 1.当赋值或访问一个已知索引的元素时，会得到正确的类型
tom[0] = 'Tom';
tom[1] = 25;

tom[0].slice(1);
tom[1].toFixed(2);

// 2.可以通过索引对函数单个赋值
let tom1: [string, number];
tom1[0] = 'Tom';


// 3.当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let tom2: [string, number];
tom2 = ['Tom', 25];
// tom2 = ['Tom'];

// 4.越界的元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

let tom3: [string, number];
tom3 = ['Tom', 25];
tom3.push('male');
// tom3.push(true);

// Argument of type 'true' is not assignable to parameter of type 'string | number'.
